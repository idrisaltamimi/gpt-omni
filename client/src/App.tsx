import { ChangeEvent, FormEvent, useState } from "react"

const App = () => {
  const [input, setInput] = useState('')
  const [aiResponse, setAiResponse] = useState('')

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setInput(target.value)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: input })
      })
      if (response.ok) {
        const result = await response.json()
        console.log(result.response)
        setAiResponse(result.response)
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <main className='m-6'>
      <form onSubmit={handleSubmit}>
        <label>
          enter prompt:
          <input
            className='block px-5 py-2 border-black rounded-md border-[1px] w-[450px]'
            type='text'
            value={input}
            onChange={handleChange}
          />
        </label>
        <button
          className='px-6 py-3 mt-4 text-white bg-blue-600 rounded-md'
          type='submit'
        >
          Send Prompt
        </button>
      </form>
      <p className='block mt-8 text-xl'>{aiResponse}</p>
    </main>
  )
}

export default App
