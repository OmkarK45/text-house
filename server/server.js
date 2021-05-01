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
const { checkAuth } = require('./middlewares/checkAuth')
const io = require('socket.io')(http)
const {
	addUser,
	getUser,
	deleteUser,
	getUsers,
	findRoom,
	getRoomUsers,
} = require('./controllers/users')
const Room = require('./models/Room')

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/auth', require('./routes/auth.route'))

const PORT = process.env.PORT

function SocketConnection() {
	io.on('connection', (socket) => {
		socket.on('CREATE_ROOM', ({ user, room }, callback) => {
			// create logic to create room with unique ID

			// MOve this to join room invoker
			// const { roomUser, error } = addUser(socket.id, user, room)

			const newRoom = new Room({
				roomName: room.roomName,
				roomTopic: room.roomTopic,
				creator: user._id,
			})

			async function makeRoom() {
				await newRoom.save()
			}

			makeRoom()
			// console.log(newRoom, user)

			// if (error) return callback(error)

			// socket.join(roomUser.room)

			// socket.in(room).emit('notification', {
			// 	title: "Someone's here",
			// 	description: `${roomUser.name} just entered the room`,
			// })

			// io.in(room).emit('users', getUsers(room))
			callback()
		})

		socket.on('JOIN_ROOM', ({ user, roomID }, callback) => {
			function addUserToRoom() {
				// const { foundRoom, error } = findRoom(roomID)
				Room.findOne({ roomID })
					.populate('users')
					.exec((error, foundRoom) => {
						console.log('Room Found', foundRoom)
						if (error) {
							return callback(error)
						}
						foundRoom.users.push(user.userID)

						foundRoom.save()

						socket.join(foundRoom.roomID)

						socket.in(foundRoom.roomID).emit('USER_JOINED', {
							info: `${user.username} has joined the room.`,
						})

						io.in(foundRoom.roomID).emit('JOINED_ROOM', {
							usersInRoom: foundRoom.users,
						})

						callback({ error: error })
					})
			}
			addUserToRoom()
		})

		socket.on('sendMessage', (message) => {
			console.log('sendMessage triggered')
			// const user = getUser(socket.id)
			// console.log(socket.id)
			// io.in(user.room).emit('message', { user: user.name, text: message })
		})

		socket.on('disconnect', () => {
			console.log('User disconnected')
			// const user = deleteUser(socket.id)
			// if (user) {
			// 	io.in(user.room).emit('notification', {
			// 		title: 'Someone just left',
			// 		description: `${user.name} just left the room`,
			// 	})
			// 	io.in(user.room).emit('users', getUsers(user.room))
			// }
		})
	})
}

SocketConnection()
app.get('/', (req, res) => {
	res.status(200).json({
		msg: 'Hello from server',
		success: true,
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
