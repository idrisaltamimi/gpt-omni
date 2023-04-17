import { FormEvent, useState } from 'react'
import { fetchData } from '../../utils'

const useSubmit = (input: string) => {
  const [response, setResponse] = useState<string>('')
  const [generatedImg, setGeneratedImg] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(false)
    setIsLoading(true)

    fetchData('POST', input, '/dalle')
      .then(res => res.json())
      .then(data => setGeneratedImg(data.photo[0].url))
      .catch((error) => console.log(error))

    try {
      const response = await fetchData('POST', search(input), '/')
      const data = await response.json()

      setResponse(data.response)
    } catch (error) {
      console.log(error)
      setError(true)
    }

    setIsLoading(false)
  }
  return {
    response,
    generatedImg,
    isLoading,
    error,
    handleSubmit
  }
}

export default useSubmit

const search = (input: string) => `
write me a recipe for ${input}. Use the following format:

  <h1 class='text-3xl md:text-4xl font-extrabold'>title</h1>
  <h2 class='mt-10 text-2xl font-bold'>Ingredients:</h2>
  <ul class='pl-8 list-disc'>
    <li class='font-medium'></li>
  </ul>
  <h2 class='mt-10 text-2xl font-bold'>Instructions:</h2>
  <ol class='pl-8 list-decimal'>
    <li class='font-medium'></li>
  </ol>
`