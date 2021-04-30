import Login from './components/Auth/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from 'components/Auth/Register'

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/auth/login" component={Login} />
				<Route exact path="/auth/register" component={Register} />
			</Switch>
		</Router>
	)
}
