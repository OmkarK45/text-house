const Room = require('../models/Room')

const getRoomUsers = async (roomID) => {
	const roomUsers = await Room.findOne({ roomID }).populate('users')
	return roomUsers
}

const findRoom = async (roomID) => {
	const foundRoom = await Room.findOne({ roomID })
	const error = {}
	if (!foundRoom) {
		error.error = 'No Room with given ID was found.'
	}
	return { foundRoom, error }
}

// const addUser = (id, name, room) => {
// 	// const existingUser = users.find(
// 	// 	(user) => user.name.trim().toLowerCase() === name.trim().toLowerCase()
// 	// )
// 	// if (existingUser) return { error: 'Username has already been taken' }
// 	// if (!name && !room) return { error: 'Username and room are required' }
// 	// if (!name) return { error: 'Username is required' }
// 	// if (!room) return { error: 'Room is required' }
// 	// const roomUser = { id, name, room }
// 	// users.push(user)
// 	// return { roomUser }
// }

// const getUser = (id) => {
// 	// let user = users.find((user) => user.id == id)
// 	// return user
// }

// const deleteUser = (id) => {
// 	// const index = users.findIndex((user) => user.id === id)
// 	// if (index !== -1) return users.splice(index, 1)[0]
// }

// // const getUsers = (room) => users.filter((user) => user.room === room)

// module.exports = { addUser, getUser, deleteUser, getUsers, getRoomUsers }
module.exports = { getRoomUsers, findRoom }
