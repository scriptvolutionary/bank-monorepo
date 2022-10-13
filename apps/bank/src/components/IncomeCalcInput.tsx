import { ChangeEventHandler } from 'react'

type IncomeCalcInputProps = {
	id: string
	label: string
	onChange: ChangeEventHandler<HTMLInputElement> | undefined
	placeholder: string
	btnId: string
	type: string
}

export function IncomeCalcInput({ id, label, onChange, placeholder, btnId, type }: IncomeCalcInputProps) {
	return (
		<div className='flex flex-col items-start'>
			<label htmlFor={id} className='form-label mb-2 inline-block text-slate-300'>
				{label}
			</label>
			<div className='input-group relative mb-4 flex w-full flex-wrap items-stretch'>
				<input
					onChange={onChange}
					type='number'
					id={id}
					className='form-control relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-slate-700 bg-slate-900 bg-clip-padding px-3 py-1.5 text-base font-normal text-slate-300 transition ease-in-out focus:border-blue-600 focus:bg-slate-800 focus:text-white focus:outline-none'
					placeholder={placeholder}
					aria-label={placeholder}
					aria-describedby={btnId}
				/>
				<button
					className='btn inline-block cursor-default rounded border-2 border-blue-600 px-6 py-2 text-xs font-medium uppercase leading-tight text-blue-600'
					type='button'
					id={btnId}
				>
					{type}
				</button>
			</div>
			<input className='form-range h-6  w-full appearance-none bg-transparent p-0 focus:shadow-none focus:outline-none focus:ring-0' type='range' />
		</div>
	)
}
