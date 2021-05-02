import { HiOutlineBadgeCheck, HiCollection } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Header from 'components/Header'
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
	return (
		<>
			{/* Background color split screen for large screens */}
			<div className="fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
			<div className="fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true" />
			<div className="relative flex flex-col min-h-screen">
				<Header />

				{/* 3 column wrapper */}
				<div className="flex-grow w-full mx-auto max-w-7xl xl:px-8 lg:flex">
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
														Debbie Lewis
													</div>
													<Link
														to="#"
														className="group flex items-center space-x-2.5"
													>
														<svg
															className="w-5 h-5 text-gray-400 group-hover:text-gray-500"
															aria-hidden="true"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path
																fillRule="evenodd"
																d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
																clipRule="evenodd"
															/>
														</svg>
														<span className="text-sm font-medium text-gray-500 group-hover:text-gray-900">
															debbielewis
														</span>
													</Link>
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

						{/* Projects List */}
						<div className="bg-white lg:min-w-0 lg:flex-1">
							<div className="pt-4 pb-4 pl-4 pr-6 border-t border-b border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
								<div className="flex items-center">
									<div className="flex flex-col">
										<h1 className="flex-1 text-lg font-bold ">
											Lorem ipsum dolor sit amet consectetur adipiscing.
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
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
