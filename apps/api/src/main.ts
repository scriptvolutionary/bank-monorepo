import { Message } from '@bank-monorepo/api-interfaces'
import * as express from 'express'

const app = express()

const greeting: Message = { message: 'Сука блять нахуй привет из сервера!' }

app.get('/api', (req, res) => {
	res.send(greeting)
})

const port = process.env.port || 3333
const server = app.listen(port, () => {
	console.log('Listening at http://localhost:' + port + '/api')
})
server.on('error', console.error)
