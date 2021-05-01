/* eslint-disable no-unused-vars */
import { useRoom } from 'context/RoomContext'
import { useState, useEffect, useRef } from 'react'
import { useSocket } from 'context/SocketContext'
import { useMembers } from 'context/MemberContext'

export default function Test() {
	const { user, room, setUser, setRoom } = useRoom()
	const socket = useSocket()
	const { members } = useMembers()
	const [messages, setMessages] = useState([])
	const [message, setMessage] = useState('')
	useEffect(() => {
		socket.on('message', (msg) => {
			setMessages([...messages, msg])
		})
	}, [socket, messages])

	function handleMessageSend() {
		socket.emit('sendMessage', message, () => setMessage(''))
		setMessage('')
	}
	return (
		<div>
			{messages.length > 0 &&
				messages.map((message, index) => {
					return <li key={index}>{JSON.stringify(message)}</li>
				})}

			<div>
				<input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
				<button onClick={handleMessageSend}>Send</button>
			</div>
		</div>
	)
}