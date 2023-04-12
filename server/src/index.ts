import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import * as dotenv from 'dotenv'

import chatRoute from './routes/chatRoute.js'

const app: Application = express()

const router = express()

dotenv.config()
app.use(cors())
app.use(express.json())

app.use('/api/chat', chatRoute)

router.route('/').get((req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello from GPT-OMRI' })
})

app.listen(8000, () => console.log('Server has started on port http://localhost:8000'))