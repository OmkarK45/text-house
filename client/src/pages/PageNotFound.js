import { Link } from 'react-router-dom'

export default function PageNotFoundimport() {
	return (
		<>
			<div className="flex justify-center w-screen h-screen align-middle">
				<div className="max-w-max max-h-min">
					<img
						src="https://image.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg"
						alt="404 Image"
					/>
					<h1 className="mt-5 text-3xl font-semibold">
						Sorry! We couldn't find that page.
					</h1>
					<Link to="/" className="font-light text-gray-700 underline">
						Go back home
					</Link>
				</div>
			</div>
		</>
	)
}
