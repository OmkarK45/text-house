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

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/auth', require('./routes/auth.route'))

const PORT = process.env.PORT

io.on('connection', (socket) => {
	socket.on('login', ({}, cb) => {
		console.log('logged in socket')
		cb()
	})
})

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
