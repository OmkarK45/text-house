require('dotenv').config({ path: './config.env' })
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
const http = require('http').createServer(app)
const connectDB = require('./config/db')
const corsOptions = require('./utils/corsOptions')
connectDB()
const io = require('socket.io')(http)
const { addUser, getUser, deleteUser, getUsers } = require('./controllers/users')
const User = require('./models/User')
const Room = require('./models/Room')
const { checkAuth } = require('./middlewares/checkAuth')

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/auth', require('./routes/auth.route'))

const PORT = process.env.PORT

app.get('/', (req, res) => {
	res.status(200).json({
		msg: 'Hello from server',
		success: true,
	})
})

app.post('/room/create', checkAuth, async (req, res) => {
	const { user, roomName, roomTopic } = req.body
	try {
		const newRoom = new Room({
			roomName,
			roomTopic,
			creator: user.userID,
		})
		await newRoom.save()
		res.status(200).json({
			msg: 'New Room created successfully.',
			room: newRoom,
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			msg: 'Something went wrong.',
			error: error,
		})
	}
})

app.get('/room/:roomID', checkAuth, async (req, res) => {
	const { roomID } = req.params
	try {
		const foundRoom = await Room.findOne({ roomID })
		res.json({
			foundRoom,
		})
		console.log('FOUND ROOM', foundRoom)
	} catch (error) {
		res.status(500).json({
			msg: 'Something went wrong',
			error,
		})
	}
})

io.on('connection', (socket) => {
	socket.on('JOIN_ROOM', async ({ clientUser, roomID }, callback) => {
		const { user, error } = await addUser(socket.id, clientUser.userID, roomID)
		console.log('ERROR', user)
		if (error) return callback(error)
		socket.join(user.roomID)
		const dbUser = await User.findOne({ _id: clientUser.userID })

		socket.in(roomID).emit('NOTIFICATION', {
			title: "Someone's here",
			description: `${dbUser.username} just entered the room`,
		})
		io.in(roomID).emit('USERS', getUsers(roomID))
		callback()
	})

	socket.on('sendMessage', (message) => {
		const user = getUser(socket.id)
		io.in(user.roomID).emit('message', { user: user.username, text: message })
	})

	socket.on('disconnect', () => {
		console.log('User disconnected')
		const user = deleteUser(socket.id)
		if (user) {
			io.in(user.room).emit('notification', {
				title: 'Someone just left',
				description: `${user.name} just left the room`,
			})
			io.in(user.room).emit('users', getUsers(user.room))
		}
	})
})

/*
    This is a 404 catch all route, for those who are lost
*/
app.use((req, res, next) => {
	res.status(404).json({
		msg: 'Requested resource was not found on this server',
		status: 404,
	})
	next()
})

http.listen(PORT, () => {
	console.log('✅ Server : Started.')
})

/**
 * This will output unhandled Rejection
 */
process.on('unhandledRejection', (error, promise) => {
	console.log(`❎Logged Error : ${error} \n ErrorStack : ${error.stack}`)
})

/**
 * This will output unhandled Execption
 */
process.on('uncaughtException', function (error) {
	console.log('❎ uncaughtException : ', error.stack)
})
