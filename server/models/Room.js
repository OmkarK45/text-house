const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

const roomSchema = new Schema(
	{
		roomID: {
			type: String,
			required: true,
			default: () => uuid.v5(),
		},
		roomName: {
			type: String,
			required: [true, 'Room name is required'],
		},
		topic: {
			type: String,
		},
		creator: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		users: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		messages: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Message',
			},
		],
	},
	{
		timestamps: true,
	}
)
const Room = mongoose.model('Room', roomSchema)
module.exports = Room
