import Login from './components/Auth/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from 'components/Auth/Register'
import PrivateRoute from 'components/PrivateRoute'
import { FeedPage, Home, RoomPage, JoinRoom, CreateRoom, PageNotFound } from 'pages/index'
import { Toaster } from 'react-hot-toast'
import Test from 'components/Test'

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
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/auth/login">
						<Login />
					</Route>
					<Route exact path="/auth/register">
						<Register />
					</Route>
					<PrivateRoute exact path="/feed">
						<FeedPage />
					</PrivateRoute>
					<PrivateRoute exact path="/room/create">
						<CreateRoom />
					</PrivateRoute>
					<PrivateRoute exact path="/room/join">
						<JoinRoom />
					</PrivateRoute>
					<PrivateRoute exact path="/room/:id">
						<RoomPage />
					</PrivateRoute>
					<Route>
						<PageNotFound />
					</Route>
				</Switch>
			</Router>
		</>
	)
}
