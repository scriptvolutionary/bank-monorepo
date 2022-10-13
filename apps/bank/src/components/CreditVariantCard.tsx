import { Button } from './Button'

type RateCardProps = {
	label: string
	content: string
	description: string
	percent: string
}

export function CreditVariantCard({ label, content, description, percent }: RateCardProps) {
	return (
		<div className='flex w-full flex-col items-center gap-16'>
			<div className='block w-full rounded-md bg-slate-800 text-center text-white'>
				<p className='border-b border-slate-700 py-4 px-6 text-base font-semibold uppercase'>Варинт кредита</p>
				<div className='flex w-full flex-col gap-8 p-8'>
					<h5 className='text-2xl font-semibold'>{label}</h5>
					<p className='text-base text-slate-300'>{content}</p>
					<p className='text-base text-slate-500'>{description}</p>
				</div>
				<p className='border-t border-slate-700 py-4 px-6 text-base font-semibold uppercase text-blue-500'>{percent} годовых</p>
			</div>
			<Button href='#credit-calc' label='Рассчитать кредит' />
		</div>
	)
}
