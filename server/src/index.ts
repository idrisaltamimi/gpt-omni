import { OpenAIApi, Configuration } from 'openai'
import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import * as dotenv from 'dotenv'

const app: Application = express()

dotenv.config()
app.use(cors())
app.use(express.json())

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
)

app.post('/', async (req: Request, res: Response) => {
  try {
    const content = req.body.content as string

    const aiResponse = await openAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: 'Hello, chatGPT' }],
    })

    const response = aiResponse.data.choices[0].message?.content

    res.status(200).json({ aiResponse: response, ok: true })
  } catch (error) {
    res.status(500).json({ error, ok: false })
  }
})