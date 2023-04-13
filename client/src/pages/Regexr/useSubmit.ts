import { FormEvent, useState } from 'react'
import { fetchData } from '../../utils'

const useSubmit = (input: string) => {
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
        `write me a javascript regular expression that ${input} as a literal without variable declaration. Return only the RegExp literal with no a code or descriptions`
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
