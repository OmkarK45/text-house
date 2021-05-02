import { HiOutlineBadgeCheck, HiChevronRight, HiCollection, HiStar } from 'react-icons/hi'
import { Link, useParams } from 'react-router-dom'
import Header from 'components/Header'
import { useAuth } from 'context/UserContext'
import { useEffect } from 'react'
import axios from 'axios'
import { useRoom } from 'context/RoomContext'
import { useSocket } from 'context/SocketContext'
import { useMembers } from 'context/MemberContext'
import Test from 'components/Test'
import ChatContainer from 'components/Chat/ChatContainer'
import ProfileCard from './../components/ProfileCard'
  
  const people = [
	{
		name: 'Leonard Krasner',
		handle: 'leonardkrasner',
		imageUrl:
			'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Floyd Miles',
		handle: 'floydmiles',
		imageUrl:
			'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Emily Selman',
		handle: 'emilyselman',
		imageUrl:
			'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Kristin Watson',
		handle: 'kristinwatson',
		imageUrl:
			'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
]

export default function RoomPage() {
	const { roomID } = useParams()
	console.log(roomID)
	const socket = useSocket()
	const { room, setRoom } = useRoom()
	const { members, setMembers } = useMembers()
	useEffect(() => {
		const fetch = async () => {
			await axios
				.get('http://localhost:5000/room/' + roomID, {
					withCredentials: true,
				})
				.then((res) => {
					setRoom(res.data)
				})
				.catch((error) => {
					setRoom({})
				})
		}
		fetch()
	}, [roomID])

	useEffect(() => {
		socket.on('USERS', (users) => setMembers([users]))
	})

	const { authState } = useAuth()
	return (
		<>
			{/* Background color split screen for large screens */}
			<div className="relative flex flex-col min-h-screen bg-white border border-red-500">
				<Header />

				{/* 3 column wrapper */}
				<div className="flex-grow w-full mx-auto mt-2 max-w-7xl xl:px-8 lg:flex">
					{/* Left sidebar & main wrapper */}
					<div className="flex-1 min-w-0 bg-white xl:flex">
						{/* Account profile */}
						<div className="bg-white xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200">
							<div className="py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0">
								<div className="flex items-center justify-between">
									<div className="flex-1 space-y-8">
										<div className="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8">
											{/* Profile */}
											<div className="flex items-center space-x-3">
												<div className="flex-shrink-0 w-12 h-12">
													<img
														className="w-12 h-12 rounded-full"
														src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
														alt=""
													/>
												</div>
												<div className="space-y-1">
													<div className="text-sm font-medium text-gray-900">
														{authState.user.username}
													</div>
													<div className="group flex items-center space-x-2.5">
														<span className="text-sm font-medium text-gray-500 group-hover:text-gray-900">
															debbielewis
														</span>
													</div>
												</div>
											</div>
											{/* Action buttons */}
											<div className="flex flex-col sm:flex-row xl:flex-col">
												<Link
													to="/room/create"
													className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 xl:w-full"
												>
													Request to speak
												</Link>
												<Link
													to="/room/join"
													className="inline-flex items-center justify-center px-4 py-2 mt-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:mt-0 sm:ml-3 xl:ml-0 xl:mt-3 xl:w-full"
												>
													End the room
												</Link>
											</div>
										</div>
										{/* Meta info */}
										<div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
											<div className="flex items-center space-x-2">
												<HiOutlineBadgeCheck
													className="w-5 h-5 text-gray-400"
													aria-hidden="true"
												/>
												<span className="text-sm font-medium text-gray-500">
													Moderators
												</span>
											</div>
											{/* List of mods */}
											<div className="flow-root mt-6">
												<ul className="-my-5 divide-y divide-gray-200">
													{people.map((person) => (
														<li key={person.handle} className="py-4">
															<ProfileCard
																profilePicture={person.imageUrl}
																name={person.name}
																username={person.handle}
															/>
														</li>
													))}
												</ul>
											</div>
											<div className="mt-6">
												<a
													href="#"
													className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
												>
													View all
												</a>
											</div>

											<div className="flex items-center space-x-2">
												<HiCollection
													className="w-5 h-5 text-gray-400"
													aria-hidden="true"
												/>
												<span className="text-sm font-medium text-gray-500">
													Watchers
												</span>
											</div>
											<div className="flow-root mt-6">
												<ul className="-my-5 divide-y divide-gray-200">
													{people.map((person) => (
														<li key={person.handle} className="py-4">
															<ProfileCard
																profilePicture={person.imageUrl}
																name={person.name}
																username={person.handle}
															/>
														</li>
													))}
												</ul>
											</div>
											<div className="mt-6">
												<a
													href="#"
													className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
												>
													View all
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="relative flex flex-col h-full bg-white border border-gray-200 lg:min-w-0 lg:flex-1">
							<div className="pt-4 pb-4 pl-4 pr-6 border-t border-b border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
								<div className="flex items-center">
									<div className="flex flex-col">
										<h1 className="flex-1 text-lg font-bold ">
											An Interesting Discussion
										</h1>
										<h3 className="flex-1 text-sm text-gray-800 text-md">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore
											magna aliqua.
										</h3>
									</div>

									<Link
										to="/feed"
										className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-gray-300 rounded-md shadow-sm min-w-max hover:text-red-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
									>
										Leave Room
									</Link>
								</div>
							</div>
							{/* Code for the chat message boxes goes here */}
							<ChatContainer />
							{/* {JSON.stringify(room)} */}
							{/* <Test /> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
