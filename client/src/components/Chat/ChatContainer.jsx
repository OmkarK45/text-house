import { Button } from 'components/ui/Button/Button'
import FormInput from 'components/ui/Form/FormInput'
import { useMembers } from 'context/MemberContext'
import { useRoom } from 'context/RoomContext'
import { useSocket } from 'context/SocketContext'
import { useAuth } from 'context/UserContext'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { FiSend } from 'react-icons/fi'
import { HiOutlineEmojiHappy } from 'react-icons/hi'

import { ChatBubble } from './ChatBubble'

export default function ChatContainer() {
	const { user, room, setUser, setRoom } = useRoom()
	const socket = useSocket()
	const { members } = useMembers()
	const [messages, setMessages] = useState([])
	const { authState } = useAuth()

	const formik = useFormik({
		initialValues: {
			body: '',
			by: authState.user,
		},
		onSubmit: (values) => handleSubmit(values),
	})
	function handleSubmit(values) {
		socket.emit('sendMessage', values, () => formik.resetForm())
	}
	useEffect(() => {
		socket.on('message', (msg) => {
			setMessages((messages) => [...messages, msg])
			console.log(msg)
		})
		// will add notification here
	}, [socket])

	console.log('MESSAGES IN ROOM', messages)

	return (
		<>
			<div className="flex-1 px-4 overflow-y-scroll border border-black bg-gray-50">
				<div className="h-full mb-5">
					<ChatBubble isOwn={false} chatBody="Well its okay" />
					<ChatBubble isOwn={true} chatBody="Is everything okay" />
					<ChatBubble isOwn={false} chatBody="Do You love oranges ??" />
					<ChatBubble isOwn={false} chatBody="Do You love oranges ??" />
					<ChatBubble isOwn={false} chatBody="Do You love oranges ??" />
					<ChatBubble isOwn={false} chatBody="Do You love oranges ??" />
					<ChatBubble isOwn={false} chatBody="Do You love oranges ??" />
					<ChatBubble isOwn={false} chatBody="Do You love oranges ??" />
					<ChatBubble isOwn={false} chatBody="Do You love oranges ??" />
					<ChatBubble isOwn={false} chatBody="Do You love oranges ??" />
					<ChatBubble isOwn={false} chatBody="Do You love oranges ??" />
					<ChatBubble isOwn={false} chatBody="Do You love oranges ??" />

					<ChatBubble isOwn={true} chatBody="Yes lmao Orange FTW" />
					<ChatBubble isOwn={true} chatBody="Yes lmao Orange FTW" />
					<ChatBubble isOwn={true} chatBody="Yes lmao Orange FTW" />
					<ChatBubble isOwn={true} chatBody="Yes lmao Orange FTW" />

					{messages &&
						messages.map((msg, index) => {
							return <li key={index}>{msg.body.body}</li>
						})}
				</div>
			</div>
			<div className="absolute bottom-0 w-full bg-gray-100">
				<form onSubmit={formik.handleSubmit}>
					<div className="flex py-3 mx-3 space-x-3">
						<div className="flex-1">
							<FormInput
								name="body"
								id="body"
								value={formik.values.body}
								onChange={formik.handleChange}
								placeholder="Type Something"
								className="flex-1 w-full h-full"
							/>
						</div>
						<div className="flex space-x-2">
							<div>
								<Button icon={HiOutlineEmojiHappy} size="lg" className="h-full" />
							</div>
							<div>
								<Button
									type="submit"
									icon={FiSend}
									size="lg"
									className="h-full"
									variant=""
								/>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}
