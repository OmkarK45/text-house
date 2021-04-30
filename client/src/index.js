import { SocketProvider } from 'context/SocketContext'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(
	<SocketProvider>
		<App />
	</SocketProvider>,
	document.getElementById('root'),
)
