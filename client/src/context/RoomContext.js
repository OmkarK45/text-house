import { createContext, useContext, useState } from 'react'

const RoomContext = createContext()

export const RoomProvider = ({ children }) => {
	const [user, setUser] = useState('')
	const [room, setRoom] = useState({})
	return (
		<RoomContext.Provider value={{ user, setUser, room, setRoom }}>
			{children}
		</RoomContext.Provider>
	)
}

export function useRoom() {
	return useContext(RoomContext)
}
