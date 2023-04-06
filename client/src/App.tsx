import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useCopyText, useSortCode } from './hooks'

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
        setAiResponse(result.response)
      }
    } catch (error) {
      console.log(error)
    }

  }

  // const getString = () => {
  //   let start = aiResponse.indexOf('```')
  //   if (start >= 0) {
  //     start += 3
  //     const end = aiResponse.indexOf('```', start)
  //     if (end >= 0) {
  //       const code = aiResponse.substring(start, end)
  //       return code
  //     }
  //   }

  // }

  // const [language, ...rest] = getString()?.split('\n') || []

  // const { isCopied, handleCopyClick } = useCopyText(rest.join('\n'))

  const [aiResponseArr] = useSortCode(aiResponse)
  let isCode = false

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

      {aiResponse !== '' && aiResponse.split('\n').map((el, i) => {
        if (el === '') return ''
        if (el === '```') {
          isCode = !isCode
          return ''
        }
        if (el.split(' ').includes('code:') && aiResponse.split('\n')[i + 2] === '```') {
          return <div>{el.split(' ')[0]}</div>
        }
        return (
          isCode ? (
            <SyntaxHighlighter language='javascript' style={docco}>{el}</SyntaxHighlighter>
          ) : (
            <p>{el}</p>
          )
        )
      })}
    </main>
  )
}

export default App