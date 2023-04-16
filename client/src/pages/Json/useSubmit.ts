import { FormEvent, useState } from 'react'

import { fetchData } from '../../utils'

const useSubmit = (input: string | null) => {
  const [response, setResponse] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (isLoading) return
    setError(false)
    setIsLoading(true)

    try {
      const response = await fetchData('POST',
        `Note, return json only no code above or below it. write code of mockup data using the following schema: 
        ${input}
        
        Finally, if the schema is not formatted properly return the word "error"`
      )

      if (!response.ok) return setError(true); setIsLoading(false)

      const result = await response.json()
      setResponse(result.response)

    } catch (error) {
      console.log(error)
      setError(true)
    }

    setIsLoading(false)
  }

  return {
    response,
    isLoading,
    error,
    handleSubmit
  }
}

export default useSubmit
