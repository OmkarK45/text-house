import FormInput from 'components/ui/Form/FormInput'
import TextArea from 'components/ui/Form/TextArea'
import { useFormik } from 'formik'
import { useSocket } from 'context/SocketContext'
import { useEffect } from 'react'
import { useMembers } from 'context/MemberContext'
import { useAuth } from 'context/UserContext'
import { useHistory } from 'react-router-dom'
import Header from 'components/Header'
import axios from 'axios'

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
		onSubmit: (values) => handleSubmit(values),
	})

	useEffect(() => {
		socket.on('users', (users) => {
			console.log(socket.id)
			setMembers(users)
		})
	})

	const handleSubmit = async (values) => {
		try {
			await axios
				.post(
					'http://localhost:5000/room/create',
					{
						user: authState.user,
						roomName: values.title,
						roomTopic: values.topic,
					},
					{
						withCredentials: true,
					},
				)
				.then((res) => {
					console.log('ROOM ID ->>> ', res.data.room.roomID)
					socket.emit(
						'JOIN_ROOM',
						{
							clientUser: authState.user,
							roomID: res?.data?.room?.roomID,
						},
						(error) => {
							console.log(error)
						},
					)
					history.push(`/room/${res.data?.room?.roomID}`)
				})

				.catch((error) => {
					throw new Error(error)
				})
		} catch (error) {
			console.log('Something went wrong', error)
		}
	}

	return (
		<>
			<Header />
			<div className="max-h-screen px-4 mx-auto mt-5 max-w-7xl sm:px-6 lg:px-8">
				<div className="flex max-w-3xl p-8 mx-auto bg-white shadow align-center">
					<div className="md:grid md:grid-cols-3 md:gap-6">
						<div className="md:col-span-1">
							<h3 className="text-lg font-medium leading-6 text-gray-900">
								Create a room
							</h3>
							<p className="mt-1 text-sm text-gray-500">
								Creating a room allows you to invite your audience over for an
								interactive session!
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
											Title
										</label>
										<div className="flex mt-1 rounded-md shadow-sm">
											<FormInput
												name="title"
												placeholder="Think of a creative name ;)"
												required={true}
												value={formik.values.title}
												onChange={formik.handleChange}
												className="flex-1 block w-full border-gray-300 rounded-none focus:ring-cyan-500 focus:border-cyan-500 rounded-r-md sm:text-sm"
											/>
										</div>
									</div>
								</div>

								<div>
									<label
										htmlFor="about"
										className="block text-sm font-semibold text-gray-700"
									>
										About
									</label>
									<div className="mt-1 ">
										<TextArea
											name="topic"
											placeholder="What is your room about?"
											rows={3}
											required={false}
											onChange={formik.handleChange}
											value={formik.values.topic}
											className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
										/>
									</div>
									<div className="flex justify-end">
										<button
											type="button"
											className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
										>
											Cancel
										</button>
										<button
											type="submit"
											className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
										>
											Create a room
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
