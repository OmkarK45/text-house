import { HiChevronDown, HiSortAscending } from 'react-icons/hi'
import { Menu } from '@headlessui/react'
import { Link } from 'react-router-dom'
import Header from 'components/Header'
import FeedCard from 'components/ui/FeedCard'
import FeedSidenav from 'components/ui/FeedSidenav'

const rooms = [
	{
		name: 'Reactive Discussions',
		to: '/room/123',
		roomId: '/room/123',
		repoHref: '#',
		user: 'omkark_45',
		members: '75',
		lastActive: 'now',
		starred: true,
		active: true,
	},
	{
		name: 'Javascript Discussions',
		to: '/room/456',
		roomId: '/room/456',
		repoHref: '#',
		user: 'sushilburagute',
		members: '11',
		lastActive: '5h ago',
		starred: false,
		active: false,
	},
]

const user = {
	name: 'Debbie Lewis',
	username: 'debbielewis',
	profilePicture:
		'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
	activeRooms: 2,
	isProMember: true,
}

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function FeedPage() {
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
						<FeedSidenav
							name={user.name}
							username={user.username}
							profilePicture={user.profilePicture}
							activeRooms={user.activeRooms}
							isProMember={user.isProMember}
						/>
						<div className="bg-white lg:min-w-0 lg:flex-1">
							<div className="pt-4 pb-4 pl-4 pr-6 border-t border-b border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
								<div className="flex items-center">
									<h1 className="flex-1 text-lg font-medium">Rooms</h1>
									<Menu as="div" className="relative">
										<Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
											<HiSortAscending
												className="w-5 h-5 mr-3 text-gray-400"
												aria-hidden="true"
											/>
											Sort
											<HiChevronDown
												className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
												aria-hidden="true"
											/>
										</Menu.Button>
										<Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<div className="py-1">
												<Menu.Item>
													{({ active }) => (
														<Link
															to="#"
															className={classNames(
																active
																	? 'bg-gray-100 text-gray-900'
																	: 'text-gray-700',
																'block px-4 py-2 text-sm',
															)}
														>
															Name
														</Link>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<Link
															to="#"
															className={classNames(
																active
																	? 'bg-gray-100 text-gray-900'
																	: 'text-gray-700',
																'block px-4 py-2 text-sm',
															)}
														>
															Date modified
														</Link>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<Link
															to="#"
															className={classNames(
																active
																	? 'bg-gray-100 text-gray-900'
																	: 'text-gray-700',
																'block px-4 py-2 text-sm',
															)}
														>
															Date created
														</Link>
													)}
												</Menu.Item>
											</div>
										</Menu.Items>
									</Menu>
								</div>
							</div>
							{rooms.map((room) => (
								<FeedCard
									name={room.name}
									to={room.to}
									roomId={room.roomId}
									repoHref={room.repoHref}
									user={room.user}
									members={room.members}
									lastActive={room.lastActive}
									starred={room.active}
									active={room.active}
									key={room.name}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
