import Login from './components/Auth/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from 'components/Auth/Register'
import PrivateRoute from 'components/PrivateRoute'
import { useAuth } from 'context/UserContext'

function Home() {
	const { authState } = useAuth()
	return <h1>{JSON.stringify(authState.user)}</h1>
}

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/auth/login" component={Login} />
				<Route exact path="/auth/register" component={Register} />
				<PrivateRoute exact path="/home" component={Home} />
			</Switch>
		</Router>
	)
}
