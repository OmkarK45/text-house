const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema(
	{
		room: {
			type: Schema.Types.ObjectId,
			ref: 'Room',
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		body: {
			type: String,
			required: [true, 'You cannot send empty message.'],
		},
	},
	{ timestamps: true }
)

const Message = mongoose.model('Message', messageSchema)

module.exports = Message
