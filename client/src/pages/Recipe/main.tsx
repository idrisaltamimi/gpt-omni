import React, { FormEvent, useState } from 'react'
import { fetchData } from '../../utils'



const Recipe = () => {
  const [name, setName] = useState<string>('')


  const [response, setResponse] = useState<any>(null)
  const [generatedImg, setGeneratedImg] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isImgLoading, setIsImgLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const response = await fetchData('POST', 'authentic philly cheese steak', '/dalle')
    const data = await response.json()

    setResponse(data.photo)
    setIsLoading(false)
  }

  return (
    <main className='text-white section'>
      <h1>Make Recipe:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>
          What do you want to cook:
          <input
            id='name'
            type='text'
            value={name}
          />
        </label>

        <label htmlFor='ingredients'>
          What do you want to cook:
          <input
            id='ingredients'
            type='text'
            value={name}
          />
        </label>
        <button>{isLoading ? 'loading' : 'submit'}</button>
      </form>
    </main>
  )
}

export default Recipe
