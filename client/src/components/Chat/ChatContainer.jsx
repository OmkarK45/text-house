import { useMembers } from 'context/MemberContext'
import { useRoom } from 'context/RoomContext'
import { useSocket } from 'context/SocketContext'
import { useEffect, useState } from 'react'
import { ChatBubble } from './ChatBubble'
import { ChatInput } from './ChatInput'

export default function ChatContainer() {
	const { user, room, setUser, setRoom } = useRoom()
	const socket = useSocket()
	const { members } = useMembers()
	const [messages, setMessages] = useState([])
	const [message, setMessage] = useState('')

	useEffect(() => {
		socket.on('message', (msg) => {
			setMessages((messages) => [...messages, msg])
		})
		// will add notification here
	}, [socket])

	function handleMessageSend() {
		socket.emit('sendMessage', message, () => setMessage(''))
		setMessage('')
	}
	console.log('MESSAGES IN ROOM', messages)

	return (
		<>
			<div className="flex-1 px-4 bg-gray-50">
				<ChatBubble isOwn={false} chatBody="Well its okay" />
				<ChatBubble isOwn={true} chatBody="Is everything okay" />
				<ChatBubble isOwn={false} chatBody="Do You love oranges ??" />
				<ChatBubble isOwn={true} chatBody="Yes lmao Orange FTW" />
			</div>

			<div className="absolute bottom-0 w-full bg-gray-100">
				<ChatInput
					message={message}
					handleMessageSend={handleMessageSend}
					setMessages={setMessages}
					setMessage={setMessage}
				/>
			</div>
		</>
	)
}
