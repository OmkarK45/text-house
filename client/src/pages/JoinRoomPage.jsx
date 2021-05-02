import Header from 'components/Header'
import FormInput from 'components/ui/Form/FormInput'
import { useSocket } from 'context/SocketContext'
import { useAuth } from 'context/UserContext'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function JoinRoom() {
	const socket = useSocket()
	const { authState } = useAuth()
	// temp
	const [users, setUsers] = useState([])

	const formik = useFormik({
		initialValues: {
			roomID: '',
		},
		onSubmit: (values) => handleSubmit(values),
	})

	useEffect(() => {
		socket.on('JOINED_ROOM', (users) => {
			setUsers((oldUsers) => [...oldUsers, users])
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
		<>
			<Header />
			<div className="max-h-screen px-4 mx-auto mt-5 max-w-7xl sm:px-6 lg:px-8">
				<div className="flex max-w-3xl p-8 mx-auto bg-white shadow align-center">
					<div className="md:grid md:grid-cols-3 md:gap-6">
						<div className="md:col-span-1">
							<h3 className="text-lg font-medium leading-6 text-gray-900">
								Join a room
							</h3>
							<p className="mt-1 text-sm text-gray-500">
								Hop in a room created by your friends!
							</p>
						</div>
						<div className="mt-5 md:mt-0 md:col-span-2">
							<form onSubmit={formik.handleSubmit}>
								<div className="grid grid-cols-3 gap-6">
									<div className="col-span-3 sm:col-span-2">
										<label
											htmlFor="company_website"
											className="block text-sm font-semibold text-gray-700 "
										>
											Room Code
										</label>
										<div className="flex mt-1 rounded-md shadow-sm">
											<FormInput
												type="text"
												id="roomID"
												name="roomID"
												onChange={formik.handleChange}
												value={formik.values.roomID}
											/>
										</div>
									</div>
								</div>

								<button
									type="submit"
									className="inline-flex justify-center px-4 py-2 mt-5 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
								>
									Join this room
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			{users &&
				users.map((user, index) => {
					return <li key={index}>{JSON.stringify(user)}</li>
				})}
		</>
	)
}
