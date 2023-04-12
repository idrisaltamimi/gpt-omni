import { FormEvent, useState } from 'react'

import { Response } from '../../../types'
import { fetchData } from '../../../utils'

const useHandleSubmit = (input: string, setInput: (value: string) => void) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [chat, setChat] = useState<Response[]>([])
  const [error, setError] = useState<boolean>(false)

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
      const response = await fetchData('POST', input)

      if (!response.ok) return setIsLoading(false)

      const result = await response.json()

      setChat(prev => [...prev, { text: result.response, isBot: true }])

    }
    catch (error) {
      console.log(error)
      setError(true)
    }

    setIsLoading(false)
  }

  return {
    chat,
    handleSubmit,
    isLoading,
    error
  }
}

export default useHandleSubmit