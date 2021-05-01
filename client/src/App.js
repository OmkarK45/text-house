import Login from './components/Auth/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from 'components/Auth/Register'
import PrivateRoute from 'components/PrivateRoute'
import { Home } from 'pages/index'
// import { useAuth } from 'context/UserContext'
import { Toaster } from 'react-hot-toast'
// import Test from 'components/Test'
import CreateRoom from 'pages/CreateRoomPage'
import JoinRoom from 'pages/JoinRoomPage'

export default function App() {
	return (
		<>
			<Toaster
				position="bottom-center"
				reverseOrder={false}
				toastOptions={{
					className: 'bg-gray-800 text-white',
					success: {
						iconTheme: {
							primary: '#059669',
						},
					},
				}}
			/>
			<Router>
				{/* <Test /> */}
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<PrivateRoute exact path="/room/create">
						<CreateRoom />
					</PrivateRoute>
					<PrivateRoute exact path="/room/join">
						<JoinRoom />
					</PrivateRoute>
					<Route exact path="/auth/login">
						<Login />
					</Route>
					<Route exact path="/auth/register">
						<Register />
					</Route>
				</Switch>
			</Router>
		</>
	)
}
