import { useSocket } from 'context/SocketContext'

export default function Login() {
	const socket = useSocket()

	const handleLogin = () => {
		socket.emit('login', () => {
			console.log('socket login triggered')
		})
	}
	return <button onClick={handleLogin}>Click me </button>
}
