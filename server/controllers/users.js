const users = []

const addUser = (id, userID, roomID) => {
	const existingUser = users.find((user) => user.userID == userID)

	if (existingUser) return { error: 'Username has already been taken' }

	const user = { id, userID, roomID }
	users.push(user)
	return { user }
}

const getUser = (id) => {
	let user = users.find((user) => user.id == id)
	return user
}

const deleteUser = (id) => {
	const index = users.findIndex((user) => user.id === id)
	if (index !== -1) return users.splice(index, 1)[0]
}

const getUsers = (roomID) => users.filter((user) => user.roomID === roomID)

module.exports = { addUser, getUser, deleteUser, getUsers }
