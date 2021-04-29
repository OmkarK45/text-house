const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

const roomSchema = new Schema({
	roomID: uuid.v5(),
})
