import { SocketProvider } from 'context/SocketContext'
import { UserProvider } from 'context/UserContext'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(
	<SocketProvider>
		<UserProvider>
			<App />
		</UserProvider>
	</SocketProvider>,
	document.getElementById('root'),
)
