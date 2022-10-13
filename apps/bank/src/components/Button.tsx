import { Link } from 'react-router-dom'

type ButtonProps = {
	to?: string
	href?: string
	label: string
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export function Button({ to, href, label, onClick }: ButtonProps) {
	if (href)
		return (
			<a href={href}>
				<button
					type='button'
					data-mdb-ripple='true'
					data-mdb-ripple-color='light'
					className='inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
					onClick={onClick}
				>
					{label}
				</button>
			</a>
		)

	if (to)
		return (
			<Link to={to}>
				<button
					type='button'
					data-mdb-ripple='true'
					data-mdb-ripple-color='light'
					className='inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
				>
					{label}
				</button>
			</Link>
		)

	return (
		<button
			type='button'
			data-mdb-ripple='true'
			data-mdb-ripple-color='light'
			className='inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
		>
			{label}
		</button>
	)
}
