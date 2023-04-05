import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from 'openai'

type ResponseData = {
  text: string
}

interface GenerateNextAPIRequest extends NextApiRequest {
  body: {
    prompt: string
  }
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openAi = new OpenAIApi(configuration)

export async function POST(req: GenerateNextAPIRequest) {
  const { prompt } = req.body

  if (!prompt || prompt === '') {
    return NextResponse.json('Please send your prompt', { status: 400 })
  }

  const aiResult = await openAi.createCompletion({
    model: 'text-davinci-003',
    prompt: `${prompt}`,
    temperature: 0.9,
    max_tokens: 2048,
    frequency_penalty: 0.5,
    presence_penalty: 0
  })

  const response = aiResult.data.choices[0].text?.trim() || 'Sorry, there were a problem'

  return NextResponse.json({ text: response, status: 200 })
}
