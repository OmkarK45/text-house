import { HiDotsVertical } from 'react-icons/hi'

export default function ProfileCard({ profilePicture, name, username }) {
	return (
		<div className="flex items-center space-x-4">
			<div className="flex-shrink-0">
				<img className="w-8 h-8 rounded-full" src={profilePicture} alt="" />
			</div>
			<div className="flex-1 min-w-0">
				<p className="text-sm font-medium text-gray-900 truncate">{name}</p>
				<p className="text-sm text-gray-500 truncate">{'@' + username}</p>
			</div>
			<div>
				<HiDotsVertical className="inline-flex text-gray-500" />
			</div>
		</div>
	)
}
