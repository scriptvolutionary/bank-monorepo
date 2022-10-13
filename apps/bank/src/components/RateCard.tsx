type RateCardProps = {
	label: string
	content: {
		label: string
	}[]
	description: string
	percent: string
}

export function RateCard({ label, content, description, percent }: RateCardProps) {
	return (
		<div className='block w-full max-w-md rounded-md bg-slate-800 text-center text-white'>
			<p className='border-b border-slate-700 py-4 px-6 text-base font-semibold uppercase'>Тариф</p>
			<div className='flex w-full flex-col gap-8 p-8'>
				<h5 className='text-2xl font-semibold'>{label}</h5>
				<ul className='flex flex-col gap-2'>
					{content?.map(c => (
						<p className='text-base text-slate-300' key={c?.label}>
							{c?.label}
						</p>
					))}
				</ul>
				<p className='text-base text-slate-500'>{description}</p>
			</div>
			<p className='border-t border-slate-700 py-4 px-6 text-base font-semibold uppercase text-blue-500'>{percent} годовых</p>
		</div>
	)
}
