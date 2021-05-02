import { Disclosure, Menu, Transition } from '@headlessui/react'
import { RiMenuFill, RiCloseFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import logo from '../../public/Logo128.jpg'

const userNavigation = [
	{ name: 'Your Profile', to: '#' },
	{ name: 'Settings', to: '#' },
	{ name: 'Sign out', to: '#' },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Header() {
	return (
		<Disclosure as="nav" className="flex-shrink-0 bg-cyan-600">
			{({ open }) => (
				<>
					<div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							{/* Logo section */}
							<div className="flex items-center px-2 lg:px-0 xl:w-64">
								<div className="flex-shrink-0">
									<img className="w-auto h-8" src={logo} alt="Mediate Logo" />
								</div>
							</div>

							<div className="flex lg:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-cyan-400 bg-cyan-600 hover:text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-600 focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<RiCloseFill className="block w-6 h-6" aria-hidden="true" />
									) : (
										<RiMenuFill className="block w-6 h-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							{/* Links section */}
							<div className="hidden lg:block lg:w-80">
								<div className="flex items-center justify-end">
									{/* Profile dropdown */}
									<Menu as="div" className="relative flex-shrink-0 ml-4">
										{({ open }) => (
											<>
												<div>
													<Menu.Button className="flex text-sm text-white rounded-full bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white">
														<span className="sr-only">
															Open user menu
														</span>
														<img
															className="w-8 h-8 rounded-full"
															src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
															alt=""
														/>
													</Menu.Button>
												</div>
												<Transition
													show={open}
													as={Fragment}
													enter="transition ease-out duration-100"
													enterFrom="transform opacity-0 scale-95"
													enterTo="transform opacity-100 scale-100"
													leave="transition ease-in duration-75"
													leaveFrom="transform opacity-100 scale-100"
													leaveTo="transform opacity-0 scale-95"
												>
													<Menu.Items
														static
														className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
													>
														{userNavigation.map((item) => (
															<Menu.Item key={item.name}>
																{({ active }) => (
																	<Link
																		to={item.to}
																		className={classNames(
																			active
																				? 'bg-gray-100'
																				: '',
																			'block px-4 py-2 text-sm text-gray-700',
																		)}
																	>
																		{item.name}
																	</Link>
																)}
															</Menu.Item>
														))}
													</Menu.Items>
												</Transition>
											</>
										)}
									</Menu>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="lg:hidden">
						<div className="pt-4 pb-3 border-t border-cyan-800">
							<div className="px-2 space-y-1">
								{userNavigation.map((item) => (
									<Link
										key={item.name}
										to={item.to}
										className="block px-3 py-2 text-base font-medium rounded-md text-cyan-200 hover:text-cyan-100 hover:bg-cyan-600"
									>
										{item.name}
									</Link>
								))}
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}
