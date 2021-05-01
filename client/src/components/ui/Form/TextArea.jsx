export default function TextArea({
	label,
	name,
	onChange,
	type,
	required,
	value,
	footerText,
	...props
}) {
	return (
		<div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
			<label
				htmlFor="about"
				className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
			>
				{label}
			</label>
			<div className="mt-1 sm:mt-0 sm:col-span-2">
				<textarea
					id={name}
					name={name}
					rows={3}
					onChange={onChange}
					required={required}
					type={type}
					value={value}
					className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					{...props}
				/>
				<p className="mt-2 text-sm text-gray-500">{footerText}</p>
			</div>
		</div>
	)
}
