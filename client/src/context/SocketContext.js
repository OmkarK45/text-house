import { createContext, useContext } from 'react'
import io from 'socket.io-client'
const SocketContext = createContext()

export const SocketProvider = ({ children }) => {
	const SOCKET_URL = 'http://localhost:5000/'
	const socket = io(SOCKET_URL, { transports: ['websocket', 'polling'] })
	return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
}

export const useSocket = () => {
	return useContext(SocketContext)
}
