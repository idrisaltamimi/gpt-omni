import React, { FormEvent, useState } from 'react'
import { fetchData } from '../../utils'

const Recipe = () => {
  const [response, setResponse] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const response = await fetchData('POST', 'authentic philly cheese steak', '/dalle')
    const data = await response.json()

    setResponse(data.photo)
    setIsLoading(false)
  }

  return (
    <main className='text-white'>
      <h1>Make Recipe:</h1>
      <form onSubmit={handleSubmit}>
        {response !== null && (
          response.map(({ url }: { url: string }) => (
            <img src={url} alt="" width={256} />
          ))
        )}
        <button>{isLoading ? 'loading' : 'submit'}</button>
      </form>
    </main>
  )
}

export default Recipe
