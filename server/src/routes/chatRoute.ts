import express, { Request, Response } from 'express'
import { Configuration, OpenAIApi } from 'openai'
import { fileURLToPath } from 'url'

import { dotenvConfig } from '../utils/index.js'

const __filename = fileURLToPath(import.meta.url)
dotenvConfig(__filename, '/../../.env')

const router = express.Router()

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
)
console.log(process.env.OPENAI_API_KEY)
router.route('/').post(async (req: Request, res: Response) => {
  try {
    const content = req.body.content as string

    const aiResponse = await openAi.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: content }],
    })

    const response = aiResponse.data.choices[0].message?.content

    res.status(200).json({ response })
  } catch (error) {
    res.status(500).send(error)
  }
})

export default router