import { useState } from 'react'
import { FormEvent } from 'react'

type Response = {
  text: string,
  isBot: boolean
}

const useHandleSubmit = (input: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [aiResponse, setAiResponse] = useState('')
  const [chat, setChat] = useState<Response[]>([])
  const [error, setError] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(false)
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:8000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: input })
      })
      if (response.ok) {
        const result = await response.json()
        setAiResponse(result)
        setChat(prev => [...prev,
        { text: input, isBot: false },
        { text: result.response, isBot: true }
        ])
      }
    } catch (error) {
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
    error
  }
}

export default useHandleSubmit
