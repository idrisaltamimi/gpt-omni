import { ChangeEvent, useState } from 'react'
import { FormEvent } from 'react'

type Response = {
  text: string,
  isBot: boolean
}

const useHandleSubmit = (type: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [aiResponse, setAiResponse] = useState('')
  const [chat, setChat] = useState<Response[]>([])
  const [error, setError] = useState(false)
  const [input, setInput] = useState<string>('')


  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setInput(target.value)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (isLoading) return

    setError(false)
    setIsLoading(true)
    setChat(prev => [...prev,
    { text: input, isBot: false }
    ])
    setInput('')

    try {
      const response = await fetch('http://localhost:8000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: input })
      })

      if (!response.ok) return setIsLoading(false)

      const result = await response.json()

      if (type === 'text') {
        setAiResponse(result.response)
        return setIsLoading(false)
      }

      setChat(prev => [...prev,
      { text: result.response, isBot: true }
      ])

    }
    catch (error) {
      console.log(error)
      setError(true)
    }

    setIsLoading(false)
  }

  return {
    chat,
    aiResponse,
    handleSubmit,
    isLoading,
    error,
    handleChange,
    input
  }
}

export default useHandleSubmit
