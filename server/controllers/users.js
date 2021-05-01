const Room = require('../models/Room')

// @omkar_k45 : This is temporary storage of users for that socket instance. It will have users with socket IDs
const users = []

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

const addUserToRoom = async (socketID, username, roomID) => {
	const usersInRoom = await Room.findOne({ roomID }).populate('users', {
		username: 1,
	})
	console.log(usersInRoom)
	// @TODO -> work on this
	const roomUser = { id, name, room }

	users.push(user)
	return { roomUser }
}

const getUser = (id) => {
	let user = users.find((user) => user.id == id)
	return user
}

const deleteUser = (id) => {
	const index = users.findIndex((user) => user.id === id)
	if (index !== -1) return users.splice(index, 1)[0]
}

const getUsers = (room) => users.filter((user) => user.room === room)

module.exports = { getRoomUsers, findRoom, getUser, deleteUser, getUsers, getRoomUsers }
