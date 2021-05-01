import { useState, createContext, useContext } from 'react'

const MemberContext = createContext()

export const MemberProvider = ({ children }) => {
	const [members, setMembers] = useState([])

	return (
		<MemberContext.Provider value={{ members, setMembers }}>{children}</MemberContext.Provider>
	)
}

export function useMembers() {
	return useContext(MemberContext)
}
