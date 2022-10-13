import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'tw-elements'

import IndexPage from '../pages/IndexPage/IndexPage'

const pages = [{ path: '/', element: <IndexPage /> }]

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				{pages?.map(p => (
					<Route path={p?.path} element={p?.element} key={p?.path} />
				))}
			</Routes>
		</BrowserRouter>
	)
}
