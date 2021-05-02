import clsx from 'clsx'
import ChatAvatar from './ChatAvatar'

export function ChatBubble({ isOwn, chatBody }) {
	return (
		<div className={clsx('flex mt-2 items-end', isOwn && ' justify-end')}>
			<div
				className={clsx(
					'flex flex-col  max-w-xs mx-2 space-y-2 text-sm',
					isOwn ? ' items-end order-1' : ' items-start order-2',
				)}
			>
				<div>
					<span
						className={clsx(
							'inline-block px-4 py-2 rounded-lg',
							isOwn ? ' text-white bg-blue-600' : ' text-gray-600 bg-gray-300',
						)}
					>
						{chatBody}
					</span>
				</div>
			</div>
			<ChatAvatar />
		</div>
	)
}

export function OtherChatBubble() {
	return (
		<div className="flex items-end justify-end">
			<div className="flex flex-col max-w-xs mx-2 space-y-2 text-xs">
				<div>
					<span className="inline-block px-4 py-2 rounded-lg">Are you using sudo?</span>
				</div>
			</div>
			<ChatAvatar />
		</div>
	)
}
