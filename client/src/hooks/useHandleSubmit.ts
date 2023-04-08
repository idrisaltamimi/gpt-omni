import { useState } from 'react'
import { FormEvent } from 'react'

interface Response {
  text: string,
  isBot: boolean
}

const useHandleSubmit = (input: string) => {
  const [isLoading, setIsLoading] = useState(false)
  const [aiResponses, setAiResponses] = useState<Response[]>([])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:8000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: input })
      })
      if (response.ok) {
        const result = await response.json()
        setAiResponses(prev => [...prev,
        { text: input, isBot: false },
        { text: result.response, isBot: true }
        ])
      }
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  return {
    aiResponses,
    handleSubmit,
    isLoading
  }
}

export default useHandleSubmit
