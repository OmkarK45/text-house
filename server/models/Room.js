const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { nanoid } = require('nanoid')

const roomSchema = new Schema(
	{
		roomID: {
			type: String,
			default: () => nanoid(8),
		},
		roomName: {
			type: String,
			required: [true, 'Room name is required'],
		},
		roomTopic: {
			type: String,
			max: 250,
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
