import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useHandleSubmit } from '../hooks'

const Chat = () => {
  const [input, setInput] = useState<string>('')

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setInput(target.value)
  }

  const { aiResponses, handleSubmit, isLoading } = useHandleSubmit(input)

  return (
    <div>
      <>
        {aiResponses.length > 0 && (
          aiResponses.map((el, i) => {
            i % 2 !== 0 ? (
              <Response aiResponse={el} />
            ) : (
              <p>{el}</p>
            )
          })
        )}
      </>

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
          {isLoading ? 'Loading...' : 'Send Prompt'}
        </button>
      </form>
    </div>
  )
}

export default Chat

const Response = ({ aiResponse }: { aiResponse: string }) => {
  let isCode = false
  return (
    <>
      {aiResponse.split('\n').map((el, i) => {
        const codeStart = el.split('').slice(0, 3).join('') === '```'
        const codeEnd: string = el.split('').slice(3).join('')

        if (el === '') return ''
        if (el === '```' || codeStart) {
          isCode = !isCode
          if (codeStart && codeEnd !== '') return codeEnd
          return ''
        }
        if (el.split(' ').includes('code:') && aiResponse.split('\n')[i + 2] === '```') {
          return <div>{el.split(' ')[0]}</div>
        }
        return (
          isCode ? (
            <SyntaxHighlighter language='typescript' style={docco} wrapLines={true}>
              {el}
            </SyntaxHighlighter>
          ) : (
            <p>{el}</p>
          )
        )
      })}
    </>
  )
}