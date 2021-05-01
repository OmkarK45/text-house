import Login from './components/Auth/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from 'components/Auth/Register'
import PrivateRoute from 'components/PrivateRoute'
import { Home } from 'pages/index'
import { useAuth } from 'context/UserContext'
import { Toaster } from 'react-hot-toast'
import Test from 'components/Test'
import CreateRoom from 'pages/CreateRoomPage'


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
				<Test />
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<PrivateRoute exact path="/home">
						<Home />
					</PrivateRoute>
					<PrivateRoute exact path="/room/create">
						<CreateRoom />
					</PrivateRoute>
					<Route exact path="/auth/login" render={() => <Login />} />
					<Route exact path="/auth/register" render={() => <Register />} />
				</Switch>
			</Router>
		</>
	)
}
