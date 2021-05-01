import { Button } from 'components/ui/Button/Button'
import FormInput from 'components/ui/Form/FormInput'
import { useSocket } from 'context/SocketContext'
import { useAuth } from 'context/UserContext'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function JoinRoom() {
	const socket = useSocket()
	const { authState } = useAuth()

	const formik = useFormik({
		initialValues: {
			roomID: '',
		},
		onSubmit: (values) => handleSubmit(values),
	})

	useEffect(() => {
		socket.on('JOINED_ROOM', (users) => {
			console.log(users)
			return toast.success('Someone joined the room')
		})
	}, [socket])

	function handleSubmit() {
		socket.emit(
			'JOIN_ROOM',
			{ user: authState.user, roomID: formik.values.roomID },
			(response) => {
				if (response) {
					console.log('response', response)
				}
			},
		)
	}
	return (
		<form onSubmit={formik.handleSubmit}>
			<FormInput
				type="text"
				id="roomID"
				name="roomID"
				onChange={formik.handleChange}
				value={formik.values.roomID}
			/>
			<Button variant="primary" type="submit">
				Join Room
			</Button>
		</form>
	)
}
