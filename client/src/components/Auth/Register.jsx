import axios from 'axios'
import { Button } from 'components/ui/Button/Button'
import FormInput from 'components/ui/Form/FormInput'
import { useFormik } from 'formik'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import AuthContainer from './AuthContainer'

export default function Register() {
	const [isLoading, setIsLoading] = useState(false)

	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		onSubmit: (values) => handleSubmit(values),
	})

	const handleSubmit = async (values) => {
		const { username, email, password } = values
		setIsLoading(true)
		try {
			await axios
				.post('http://localhost:5000/api/auth/register', {
					username,
					email,
					password,
				})
				// handle redirection logic
				.then((res) => {
					setIsLoading(false)
					console.log(res)
				})
				.catch((err) => console.log(err.response.data))
		} catch (error) {
			setIsLoading(false)

			// @TODO -> notify something bad happened
			console.log(error)
		}
	}
	return (
		<div className="min-h-screen">
			<AuthContainer title="Sign up">
				<form onSubmit={formik.handleSubmit} className="space-y-6">
					<FormInput
						label="Username"
						id="username"
						name="username"
						type="text"
						autoComplete="off"
						required={true}
						placeholder="Your username"
						onChange={formik.handleChange}
						value={formik.values.username}
					/>
					<FormInput
						label="Email Address"
						name="email"
						type="email"
						id="email"
						required={true}
						placeholder="you@example.com"
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
					<FormInput
						id="password"
						label="Password"
						name="password"
						type="password"
						required={true}
						placeholder="Password (min 6 characters)"
						onChange={formik.handleChange}
						value={formik.values.password}
					/>
					<FormInput
						label="Confirm Password"
						name="confirmPassword"
						id="confirmPassword"
						type="password"
						required={true}
						placeholder="Confirm Password"
						onChange={formik.handleChange}
						value={formik.values.confirmPassword}
					/>
					<div>
						<Button
							type="submit"
							fullWidth
							size="md"
							variant="primary"
							className="py-3 mt-1"
							isLoading={isLoading}
							loadingText="Registering you..."
						>
							Sign Up
						</Button>
					</div>
				</form>
				<div className="mt-3 text-gray-300">
					<p>
						Already have an account ? <Link to="/auth/login"> Sign in</Link>
					</p>
				</div>
			</AuthContainer>
		</div>
	)
}
