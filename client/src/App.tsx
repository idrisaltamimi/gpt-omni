import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useCopyText, useSortCode } from "./hooks"

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

  // console.log(aiResponseArr)

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
      <div className='bg-[#f8f8ff] rounded-md p-4'>

        <div className="flex justify-between">

          {/* <h3>{language}</h3>
          <button
            onClick={handleCopyClick}
          >
            {isCopied ? 'Copied' : 'Copy code'}
          </button> */}
        </div>
        <SyntaxHighlighter language="javascript" style={docco}>
          {aiResponse}
        </SyntaxHighlighter>
      </div>
    </main>
  )
}

export default App