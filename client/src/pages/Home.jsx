/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { RiMenuFill, RiCloseFill } from 'react-icons/ri'

const navigation = [
	{ name: 'Mediate', href: '#' },
	{ name: 'Features', href: '#' },
]

export default function Example() {
	return (
		<Popover className="relative overflow-hidden bg-white">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl ">
						<div className="relative z-10 h-screen pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
							<svg
								className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
								fill="currentColor"
								viewBox="0 0 100 100"
								preserveAspectRatio="none"
								aria-hidden="true"
							>
								<polygon points="50,0 100,0 50,100 0,100" />
							</svg>

							<div className="relative px-4 pt-6 sm:px-6 lg:px-8">
								<nav
									className="relative flex items-center justify-between sm:h-10 lg:justify-start"
									aria-label="Global"
								>
									<div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
										<div className="flex items-center justify-between w-full md:w-auto">
											<a href="#">
												<span className="sr-only">Workflow</span>
												<img
													className="w-auto h-8 sm:h-10"
													src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
												/>
											</a>
											<div className="flex items-center -mr-2 md:hidden">
												<Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
													<span className="sr-only">Open main menu</span>
													<RiMenuFill
														className="w-6 h-6"
														aria-hidden="true"
													/>
												</Popover.Button>
											</div>
										</div>
									</div>
									<div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="font-medium text-gray-500 hover:text-gray-900"
											>
												{item.name}
											</a>
										))}
										<a
											href="#"
											className="font-medium text-cyan-600 hover:text-cyan-500"
										>
											Log in
										</a>
									</div>
								</nav>
							</div>

							<Transition
								show={open}
								as={Fragment}
								enter="duration-150 ease-out"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="duration-100 ease-in"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Popover.Panel
									focus
									static
									className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
								>
									<div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
										<div className="flex items-center justify-between px-5 pt-4">
											<div>
												<img
													className="w-auto h-8"
													src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
													alt=""
												/>
											</div>
											<div className="-mr-2">
												<Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
													<span className="sr-only">Close main menu</span>
													<RiCloseFill
														className="w-6 h-6"
														aria-hidden="true"
													/>
												</Popover.Button>
											</div>
										</div>
										<div className="px-2 pt-2 pb-3 space-y-1">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
												>
													{item.name}
												</a>
											))}
										</div>
										<a
											href="#"
											className="block w-full px-5 py-3 font-medium text-center text-cyan-600 bg-gray-50 hover:bg-gray-100"
										>
											Log in
										</a>
									</div>
								</Popover.Panel>
							</Transition>

							<main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
								<div className="sm:text-center lg:text-left">
									<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
										<span className="block xl:inline">Your place to</span>{' '}
										<span className="block text-cyan-600 xl:inline">text.</span>
									</h1>
									<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
										An invite-only place with plenty of room to chat about the
										topics which are on your mind. Grab a seat and watch the
										explode with conversations.
									</p>
									<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
										<div className="rounded-md shadow">
											<a
												href="#"
												className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-cyan-600 hover:bg-cyan-700 md:py-4 md:text-lg md:px-10"
											>
												Sign Up
											</a>
										</div>
										<div className="mt-3 sm:mt-0 sm:ml-3">
											<a
												href="#"
												className="flex items-center justify-center w-full px-8 py-3 text-base font-medium bg-white border border-transparent rounded-md text-cyan-700 hover:bg-cyan-100 md:py-4 md:text-lg md:px-10"
											>
												Live demo
											</a>
										</div>
									</div>
								</div>
							</main>
						</div>
					</div>
					<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
						<img
							className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
							src="https://images.unsplash.com/photo-1506377711776-dbdc2f3c20d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
							alt=""
						/>
					</div>
				</>
			)}
		</Popover>
	)
}
