import { useState } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { IncomeCalcInput } from '../../components/IncomeCalcInput'
import { RateCard } from '../../components/RateCard'
import { ReadResultInput } from '../../components/ReadResultInput'
import { CreditVariantCard } from './../../components/CreditVariantCard'

const rates = [
	{
		label: 'Стабильный',
		content: [{ label: 'Без пополнения' }, { label: 'Без снятия' }, { label: 'Без капитализации' }],
		description: 'Минимальный срок от 3 месяцев',
		percent: '8%'
	},
	{
		label: 'Оптимальный',
		content: [{ label: 'Пополняемый' }, { label: 'Есть возможность снятия' }, { label: 'С капитализацией' }],
		description: 'Минимальный срок от 6 месяцев',
		percent: '5%'
	},
	{
		label: 'Стандарт',
		content: [{ label: 'Пополняемый' }, { label: 'Без снятия' }, { label: 'Без капитализации' }],
		description: 'Минимальный срок от 3 месяцев',
		percent: '6%'
	}
]

const rateLinks = [
	{ label: 'Рассчитать доход', href: '#income-calc' },
	{ label: 'Рассчитать кредит', href: '#credit-calc' }
]

const creditVariants = [
	{
		label: 'Простой',
		content: 'Требуется только паспорт',
		description: 'Минимальный срок от 12 месяцев',
		percent: '20%'
	},
	{
		label: 'Оптимальный',
		content: 'Требуется паспорт и справка о доходах',
		description: 'Минимальный срок от 36 месяцев',
		percent: '18%'
	},
	{
		label: 'Льготный',
		content: 'Требуется паспорт и зп карта банка',
		description: 'Минимальный срок от 60 месяцев',
		percent: '16%'
	}
]

const creditVariantLinks = [
	{ label: 'Рассчитать кредит', href: '#credit-calc' },
	{ label: 'Рассчитать кредит', href: '#credit-calc' },
	{ label: 'Рассчитать кредит', href: '#credit-calc' }
]

export default function IndexPage() {
	const percentOptimal = 8
	const percentStandart = 5
	const percentStable = 6

	const [incomeSum, setIncomeSum] = useState(0)
	const [incomeTerm, setIncomeTerm] = useState(0)
	const [incomeRefill, setIncomeRefill] = useState(0)

	const income = (percent: number) => {
		let res = 0
		res = incomeSum / (incomeTerm / 30) / percent + incomeRefill

		return Math.round(res)
	}

	const incomeResult = (percent: number) => {
		let res = 0
		res = incomeSum + income(percent) * (incomeTerm / 30)

		return Math.round(res)
	}

	return (
		<>
			<Header />
			<main className='flex flex-col'>
				<section className='h-screen w-screen'>
					<div className='container mx-auto flex h-full flex-col justify-center py-24'>
						<div className='flex flex-col items-center justify-center gap-16'>
							<div className='grid w-full grid-cols-3 place-items-center items-center gap-8'>
								{rates?.map(r => (
									<RateCard label={r?.label} content={r?.content} description={r?.description} percent={r?.percent} />
								))}
							</div>
							<div className='grid grid-cols-2 items-center justify-center gap-8'>
								{rateLinks?.map(l => (
									<Button href={l?.href} label={l?.label} key={l?.label} />
								))}
							</div>
						</div>
					</div>
				</section>
				<section id='income-calc' className='h-screen w-screen'>
					<div className='container mx-auto flex h-full flex-col justify-center py-24'>
						<div className='flex flex-col items-center justify-center gap-16'>
							<div className='flex w-full place-items-center items-center justify-center gap-8'>
								<div className='block w-full max-w-md rounded-md border border-slate-700 bg-slate-900 text-center text-white'>
									<p className='border-b border-slate-700 py-4 px-6 text-base font-semibold uppercase'>Рассчитать доход</p>
									<div className='flex w-full flex-col gap-8 p-8'>
										<IncomeCalcInput
											id='input-sum'
											label='Сумма'
											placeholder='Введите сумму'
											onChange={e => setIncomeSum(parseInt(e.target.value))}
											btnId='button-sum'
											type='руб'
										/>
										<IncomeCalcInput
											id='input-term'
											label='Срок'
											placeholder='Введите срок'
											onChange={e => setIncomeTerm(parseInt(e.target.value))}
											btnId='button-term'
											type='дн'
										/>
										<IncomeCalcInput
											id='input-refill'
											label='Ежемесячное пополнение'
											placeholder='Введите сумму'
											onChange={e => setIncomeRefill(parseInt(e.target.value))}
											btnId='button-refill'
											type='руб'
										/>
									</div>
								</div>
								<div className='block w-full max-w-md rounded-md bg-slate-800 text-center text-white'>
									<div className='flex w-full flex-col gap-8 p-8'>
										<ReadResultInput label='Оптимальный' value={income(percentOptimal)} />
										<ReadResultInput label='Стабильный' value={income(percentStable)} />
										<ReadResultInput label='Стандартный' value={income(percentStandart)} />
										<Button href='#compare' label='Сравнить параметры' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='h-screen w-screen'>
					<div className='container mx-auto flex h-full flex-col justify-center py-24'>
						<div className='flex flex-col items-center justify-center gap-16'>
							<div className='flex w-full place-items-center items-center justify-center gap-8'>
								{creditVariants?.map(v => (
									<CreditVariantCard label={v?.label} content={v?.content} description={v?.description} percent={v?.percent} />
								))}
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
