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

	const [creditSum, setCreditSum] = useState(0)
	const [creditTerm, setCreditTerm] = useState(0)

	const credit = (percent: number) => {
		let res = 0
		res = ((creditSum / creditTerm) * 10) / percent

		return Math.round(res)
	}

	const calc = (percent: number) => {
		const payments = credit(percent)
		const debt = creditSum / creditTerm
		const percents = payments - debt
		let remaining = credit(percent) * creditTerm

		const listPay = []
		const listDeb = []
		const listPer = []
		const listRem = []
		const nums = []
		const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
		const year = 2022
		let i = 1

		const arrr = []

		const arrYear = []

		while (remaining > 0) {
			remaining -= credit(percent)

			listPay.push(Math.round(payments))
			listDeb.push(Math.round(debt))
			listPer.push(Math.round(percents))
			listRem.push(Math.round(remaining))
			nums.push(i++)
		}
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
										<ReadResultInput label='Оптимальный' value={income(percentOptimal)} subLabel='Доход:' />
										<ReadResultInput label='Стабильный' value={income(percentStable)} subLabel='Доход:' />
										<ReadResultInput label='Стандартный' value={income(percentStandart)} subLabel='Доход:' />
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
				<section id='credit-calc' className='h-screen w-screen'>
					<div className='container mx-auto flex h-full flex-col justify-center py-24'>
						<div className='flex flex-col items-center justify-center gap-16'>
							<div className='flex w-full place-items-center items-center justify-center gap-8'>
								<div className='block w-full max-w-md rounded-md border border-slate-700 bg-slate-900 text-center text-white'>
									<p className='border-b border-slate-700 py-4 px-6 text-base font-semibold uppercase'>Рассчитать кредит</p>
									<div className='flex w-full flex-col gap-8 p-8'>
										<IncomeCalcInput
											id='input-sum'
											label='Сумма'
											placeholder='Введите сумму'
											onChange={e => setCreditSum(parseInt(e.target.value))}
											btnId='button-sum'
											type='руб'
										/>
										<IncomeCalcInput
											id='input-term'
											label='Срок'
											placeholder='Введите срок'
											onChange={e => setCreditTerm(parseInt(e.target.value))}
											btnId='button-term'
											type='дн'
										/>
									</div>
								</div>
								<div className='block w-full max-w-md rounded-md bg-slate-800 text-center text-white'>
									<div className='flex w-full flex-col gap-8 p-8'>
										<ReadResultInput
											label='Оптимальный'
											value={credit(percentOptimal)}
											subLabel='Ежемесячный платеж:'
											href='#remaining'
											onClick={() => calc(percentOptimal)}
										/>
										<ReadResultInput
											label='Стабильный'
											value={credit(percentStable)}
											subLabel='Ежемесячный платеж:'
											href='#remaining'
											onClick={() => calc(percentStable)}
										/>
										<ReadResultInput
											label='Стандартный'
											value={credit(percentStandart)}
											subLabel='Ежемесячный платеж:'
											href='#remaining'
											onClick={() => calc(percentStandart)}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id='remaining' className='h-screen w-screen'>
					<div className='container mx-auto flex h-full flex-col justify-center py-24'>
						<div className='flex flex-col items-center justify-center gap-16 overflow-hidden'>
							<table className='w-2/3 bg-slate-900 text-white'>
								<thead className='border-b border-slate-700 bg-blue-600 text-white'>
									<tr>
										<th scope='col' className='px-6 py-4 text-left text-sm font-medium'>
											Название
										</th>
										<th scope='col' className='px-6 py-4 text-left text-sm font-medium'>
											Доход
										</th>
										<th scope='col' className='px-6 py-4 text-left text-sm font-medium'>
											Сумма к концу срока
										</th>
										<th scope='col' className='px-6 py-4 text-left text-sm font-medium'>
											Ставка
										</th>
										<th scope='col' className='px-6 py-4 text-left text-sm font-medium'>
											Вклад
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className='border-b border-slate-700 text-white transition duration-300 ease-in-out hover:bg-slate-800'>
										<td className='whitespace-nowrap px-6 py-4 text-sm font-medium'>Оптимальный</td>
										<td className='whitespace-nowrap px-6 py-4 text-sm font-light '>{income(percentOptimal)}</td>
										<td className='whitespace-nowrap px-6 py-4 text-sm font-light '>{incomeResult(percentOptimal)}</td>
										<td className='whitespace-nowrap px-6 py-4 text-sm font-light '>8%</td>
										<td className='whitespace-nowrap px-6 py-4 text-sm font-light '>
											<Button label='Открыть' />
										</td>
									</tr>
									<tr className='border-b border-slate-700 text-white transition duration-300 ease-in-out hover:bg-slate-800'>
										<td className='whitespace-nowrap px-6 py-4 text-sm font-medium'>Стабильный</td>
										<td className='whitespace-nowrap px-6 py-4 text-sm font-light '>{income(percentStable)}</td>
										<td className='whitespace-nowrap px-6 py-4 text-sm font-light '>{incomeResult(percentStable)}</td>
										<td className='whitespace-nowrap px-6 py-4 text-sm font-light '>8%</td>
										<td className='whitespace-nowrap px-6 py-4 text-sm font-light '>
											<Button label='Открыть' />
										</td>
									</tr>
									<tr className='border-b border-slate-700 text-white transition duration-300 ease-in-out hover:bg-slate-800'>
										<td className='whitespace-nowrap px-6 py-4 text-sm font-medium'>Стандартный</td>
										<td className='whitespace-nowrap px-6 py-4 text-sm font-light '>{income(percentStandart)}</td>
										<td className='whitespace-nowrap px-6 py-4 text-sm font-light '>{incomeResult(percentStandart)}</td>
										<td className='whitespace-nowrap px-6 py-4 text-sm font-light '>8%</td>
										<td className='whitespace-nowrap px-6 py-4 text-sm font-light '>
											<Button label='Открыть' />
										</td>
									</tr>
								</tbody>
							</table>
							<Button label='Сформировать выписку' />
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
