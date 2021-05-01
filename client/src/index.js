import { MemberProvider } from 'context/MemberContext'
import { RoomProvider } from 'context/RoomContext'
import { SocketProvider } from 'context/SocketContext'
import { UserProvider } from 'context/UserContext'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(
	<UserProvider>
		<SocketProvider>
			<RoomProvider>
				<MemberProvider>
					<App />
				</MemberProvider>
			</RoomProvider>
		</SocketProvider>
	</UserProvider>,
	document.getElementById('root'),
)
