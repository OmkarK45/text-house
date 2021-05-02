import { HiOutlineBadgeCheck, HiChevronRight, HiCollection, HiStar } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Header from 'components/Header'

const projects = [
	{
		name: 'Reactive Discussions',
		to: '#',
		siteHref: '#',
		repoHref: '#',
		repo: 'debbielewis/workcation',
		tech: 'Laravel',
		lastDeploy: '3h ago',
		location: 'United states',
		starred: true,
		active: true,
	},
	// More projects...
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

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
													Create Room
												</Link>
												<Link
													to="/room/join"
													className="inline-flex items-center justify-center px-4 py-2 mt-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:mt-0 sm:ml-3 xl:ml-0 xl:mt-3 xl:w-full"
												>
													Join Room
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
											<div className="flex items-center space-x-2">
												<HiCollection
													className="w-5 h-5 text-gray-400"
													aria-hidden="true"
												/>
												<span className="text-sm font-medium text-gray-500">
													Watchers
												</span>
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
							<ul className="relative z-0 border-b border-gray-200 divide-y divide-gray-200">
								{projects.map((project) => (
									<li
										key={project.repo}
										className="relative py-5 pl-4 pr-6 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
									>
										<div className="flex items-center justify-between space-x-4">
											{/* Repo name and link */}
											<div className="min-w-0 space-y-3">
												<div className="flex items-center space-x-3">
													<span
														className={classNames(
															project.active
																? 'bg-green-100'
																: 'bg-gray-100',
															'h-4 w-4 rounded-full flex items-center justify-center',
														)}
														aria-hidden="true"
													>
														<span
															className={classNames(
																project.active
																	? 'bg-green-400'
																	: 'bg-gray-400',
																'h-2 w-2 rounded-full',
															)}
														/>
													</span>

													<span className="block">
														<h2 className="text-sm font-medium">
															<Link to={project.to}>
																<span
																	className="absolute inset-0"
																	aria-hidden="true"
																/>
																{project.name}{' '}
																<span className="sr-only">
																	{project.active
																		? 'Running'
																		: 'Not running'}
																</span>
															</Link>
														</h2>
													</span>
												</div>
												<Link
													to={project.repoHref}
													className="relative group flex items-center space-x-2.5"
												>
													<svg
														className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
														viewBox="0 0 18 18"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														aria-hidden="true"
													>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372 16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761 13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487 4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408 11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97 0 8.99917 0Z"
															fill="currentcolor"
														/>
													</svg>
													<span className="text-sm font-medium text-gray-500 truncate group-hover:text-gray-900">
														{project.repo}
													</span>
												</Link>
											</div>
											<div className="sm:hidden">
												<HiChevronRight
													className="w-5 h-5 text-gray-400"
													aria-hidden="true"
												/>
											</div>
											{/* Repo meta info */}
											<div className="flex-col items-end flex-shrink-0 hidden space-y-3 sm:flex">
												<p className="flex items-center space-x-4">
													<Link
														to={project.siteHref}
														className="relative text-sm font-medium text-gray-500 hover:text-gray-900"
													>
														Visit site
													</Link>
													<button
														className="relative bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
														type="button"
													>
														<span className="sr-only">
															{project.starred
																? 'Add to favorites'
																: 'Remove from favorites'}
														</span>
														<HiStar
															className={classNames(
																project.starred
																	? 'text-yellow-300 hover:text-yellow-400'
																	: 'text-gray-300 hover:text-gray-400',
																'h-5 w-5',
															)}
															aria-hidden="true"
														/>
													</button>
												</p>
												<p className="flex space-x-2 text-sm text-gray-500">
													<span>{project.tech}</span>
													<span aria-hidden="true">&middot;</span>
													<span>Last deploy {project.lastDeploy}</span>
													<span aria-hidden="true">&middot;</span>
													<span>{project.location}</span>
												</p>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
