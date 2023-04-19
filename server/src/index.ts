import { OpenAIApi, Configuration } from 'openai'
import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import * as dotenv from 'dotenv'
import path from 'path';

const app: Application = express()

dotenv.config()
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

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
      messages: [{ role: "user", content: content }],
    })

    const response = aiResponse.data.choices[0].message?.content

    res.status(200).json({ response })
  } catch (error) {
    res.status(500).send(error)
  }
})

app.post('/dalle', async (req: Request, res: Response) => {
  try {
    const content = req.body.content as string

    const aiResponse = await openAi.createImage({
      prompt: content,
      n: 1,
      size: '256x256',
    })

    const image = aiResponse.data.data

    res.status(200).json({ photo: image })
  } catch (error) {
    console.log(error)
    res.status(500).send(error?.response.data.error.message)
  }
})

app.listen(8000, () => console.log('Server has started on port http://localhost:8000'))