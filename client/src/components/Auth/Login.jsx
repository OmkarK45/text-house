import axios from 'axios'
import FormInput from 'components/ui/Form/FormInput'
import { useAuth } from 'context/UserContext'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link, useHistory } from 'react-router-dom'

import { Button } from './../ui/Button/Button'
import AuthContainer from './AuthContainer'
import { useFormik } from 'formik'

export default function Login() {
	const history = useHistory()

	const { setAuthState } = useAuth()

	const [isLoading, setIsLoading] = useState(false)

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values) => handleSubmit(values),
	})

	const handleSubmit = async (values) => {
		setIsLoading(true)
		try {
			await axios
				.post(
					'http://localhost:5000/api/auth/login',
					{
						email: values.email,
						password: values.password,
					},
					{
						withCredentials: true,
					},
				)
				.then((res) => {
					// @TODO-> Show Toast on success
					setIsLoading(false)
					toast.success('Logged in!')
					console.log(res.data)
					setAuthState(res.data)
					history.push('/')
				})
				.catch((error) => {
					// @TODO -> Show toast on error
					console.log(error.response.data.msg)
					setIsLoading(false)
					toast.error(error.response.data.msg)
					setAuthState(null)
				})
		} catch (error) {
			setIsLoading(false)
		}
	}

	return (
		<div className="min-h-screen">
			<AuthContainer title="Sign in">
				<form onSubmit={formik.handleSubmit} className="space-y-6">
					<FormInput
						label="Email Address"
						id="email"
						name="email"
						type="email"
						autoComplete="off"
						required={true}
						placeholder="you@example.com"
						onChange={formik.handleChange}
						value={formik.values.email}
						autoFocus
					/>
					<FormInput
						id="password"
						label="Password"
						name="password"
						type="password"
						required={true}
						placeholder="Password"
						onChange={formik.handleChange}
						value={formik.values.password}
					/>
					<div>
						<Button
							type="submit"
							isLoading={isLoading}
							loadingText="Signing you in"
							fullWidth
							size="md"
							variant="primary"
							className="py-3 mt-1"
						>
							Sign In
						</Button>
					</div>
				</form>
				<div className="mt-3 text-gray-300">
					<p>
						Don't have an account ? <Link to="/auth/register"> Sign up</Link>
					</p>
				</div>
			</AuthContainer>
			<div>
				<p className="text-center text-gray-500">&copy; 2021, DogeFlix</p>
			</div>
		</div>
	)
}
