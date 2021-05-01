/* eslint-disable no-unused-vars */
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext()

export function UserProvider({ children }) {
	const user = JSON.parse(localStorage.getItem('user'))
	console.log(typeof user)
	const [authState, setAuthState] = useState({
		user: user,
		isAuthenticated: false,
	})

	function setAuth({ user }) {
		try {
			localStorage.setItem('user', JSON.stringify(user))

			setAuthState({
				user,
				isAuthenticated: user && user.userID ? true : false,
			})
		} catch (err) {
			return
		}
	}

	function logout() {
		setAuthState({})
	}
	useEffect(() => {
		const checkLoggedIn = async () => {
			try {
				await axios
					.get('http://localhost:5000/api/auth/user', {
						withCredentials: true,
					})
					.then((res) => {
						console.log(res)
						setAuthState({
							user: res.data.user,
							isAuthenticated: true,
						})
					})
					.catch((error) => {
						console.log(error)
						setAuthState({
							user: {},
							isAuthenticated: false,
						})
					})
			} catch (error) {
				console.log(error)
			}
		}
		checkLoggedIn()
	}, [])

	return (
		<UserContext.Provider
			value={{
				authState,
				setAuthState: (authInfo) => setAuth(authInfo),
				logout,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}

export function useAuth() {
	return useContext(UserContext)
}
