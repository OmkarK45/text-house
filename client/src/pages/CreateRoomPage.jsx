import { Button } from 'components/ui/Button/Button'
import FormInput from 'components/ui/Form/FormInput'
import TextArea from 'components/ui/Form/TextArea'
import { useFormik } from 'formik'
import { useSocket } from 'context/SocketContext'
import { useEffect } from 'react'
import { useMembers } from 'context/MemberContext'
import { useAuth } from 'context/UserContext'
import { useHistory } from 'react-router-dom'

export default function CreateRoom() {
	const history = useHistory()
	const socket = useSocket()
	const { setMembers } = useMembers()
	const { authState } = useAuth()

	const formik = useFormik({
		initialValues: {
			title: '',
			topic: '',
		},
		onSubmit: (values) => console.log(values),
	})

	useEffect(() => {
		socket.on('users', (users) => {
			console.log(socket.id)
			setMembers(users)
		})
	})

	const handleClick = () => {
		socket.emit(
			'CREATE_ROOM',
			{
				user: authState.user,
				room: {
					roomName: formik.values.title,
					roomTopic: formik.values.topic,
				},
			},
			(response) => {
				if (response) {
					console.log('error', response)
				}
				console.log('created')
			},
		)
		history.push('/home')
	}

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<FormInput
					name="title"
					placeholder="Your room titlte"
					required={true}
					value={formik.values.title}
					onChange={formik.handleChange}
				/>
				<TextArea
					name="topic"
					placeholder="What is this room about ?"
					required={false}
					onChange={formik.handleChange}
					value={formik.values.topic}
				/>
				<div className="flex space-x-2">
					<Button>Cancel</Button>
					<Button onClick={handleClick}>Create</Button>
				</div>
			</form>
		</div>
	)
}
