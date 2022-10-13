import { Button } from './Button'

type ReadResultInputProps = {
	href?: string
	label: string
	subLabel: string
	value: string | number | readonly string[] | undefined
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export function ReadResultInput({ href, label, subLabel, value, onClick }: ReadResultInputProps) {
	return (
		<div className='flex flex-col items-end'>
			<h5 className='mb-2 text-2xl font-semibold'>{label}</h5>
			<label htmlFor='input-sum' className='form-label mb-2 inline-block text-slate-300'>
				{subLabel}
			</label>
			<div className='input-group relative mb-4 flex w-full flex-wrap items-stretch'>
				<input
					className='form-control relative m-0 block w-full min-w-0 flex-auto cursor-default rounded border-2 border border-solid border-blue-600 bg-slate-800 bg-clip-padding px-3 py-1.5 text-base font-normal text-blue-600 focus:outline-none focus:ring-0'
					placeholder='Считаю сумму...'
					value={value}
					aria-label='Считаю сумму...'
					aria-describedby='button-sum'
					readOnly
				/>
				<button
					className='rounder btn inline-block cursor-default rounded-r border border-blue-600 bg-blue-600 px-6 py-2 text-xs font-medium uppercase leading-tight text-white '
					type='button'
					id='button-sum'
				>
					руб
				</button>
			</div>
			{onClick && <Button href={href} label='Рассчитать кредит' onClick={onClick} />}
		</div>
	)
}
