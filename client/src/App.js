import Login from './components/Auth/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from 'components/Auth/Register'
import PrivateRoute from 'components/PrivateRoute'
import { Home } from 'pages/index'

export default function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<PrivateRoute exact path="/home">
						<Home />
					</PrivateRoute>
					<Route exact path="/auth/login" render={() => <Login />} />
					<Route exact path="/auth/register" render={() => <Register />} />
				</Switch>
			</Router>
		</>
	)
}
