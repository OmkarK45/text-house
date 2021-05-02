import { Button } from 'components/ui/Button/Button'
import FormInput from 'components/ui/Form/FormInput'
import { FiSend } from 'react-icons/fi'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
export function ChatInput({ handleMessageSend, message, setMessage }) {
	return (
		<div className="flex py-3 mx-3 space-x-3">
			<div className="flex-1 ">
				<FormInput
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Type Something"
					className="flex-1 w-full h-full"
				/>
			</div>
			<div className="flex space-x-2">
				<div>
					<Button icon={HiOutlineEmojiHappy} size="lg" className="h-full" />
				</div>
				<div>
					<Button
						onClick={handleMessageSend}
						icon={FiSend}
						size="lg"
						className="h-full"
						variant=""
					/>
				</div>
			</div>
		</div>
	)
}
