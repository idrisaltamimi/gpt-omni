import { ChangeEvent, ReactNode, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useCopyText, useHandleSubmit } from '../hooks'

const Chat = () => {
  const [input, setInput] = useState<string>('')

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setInput(target.value)
  }

  const { aiResponses, handleSubmit, isLoading } = useHandleSubmit(input)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          enter prompt:
          <textarea
            className='block px-5 py-2 border-black rounded-md border-[1px] w-[450px] max-h-[200px]'

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

      <div>
        {aiResponses.length > 0 &&
          aiResponses.map(el => (
            el.isBot ? (
              <div className='block text-blue-700'>
                <CodeBlock text={el.text} />
              </div>
            ) : (
              <p className='bg-gray-400'>{el.text}</p>
            ))
          )
        }
      </div>
    </div>
  )
}

export default Chat

const CodeBlock = ({ text }: { text: string }) => {
  const codeRegex = /```([\s\S]*?)```/g
  const parts = text.split(codeRegex)

  return (
    <>
      {parts.map((part, index) => {
        if (index % 2 === 0) {
          return <p key={crypto.randomUUID()}>{part}</p>
        } else {
          return <CodeSyntax part={part} />
        }
      })}
    </>
  )
}

const CodeSyntax = ({ part }: { part: string }) => {
  const { isCopied, handleCopyClick } = useCopyText()

  return (
    <>
      <button
        className='block w-full text-right'
        onClick={() => handleCopyClick(part.trim())}
      >
        {isCopied ? 'Copied' : 'Copy code'}
      </button>
      <SyntaxHighlighter
        key={crypto.randomUUID()}
        language="typescript"
        style={monokaiSublime}
        wrapLongLines={true}
      >
        {part.trim()}
      </SyntaxHighlighter>
    </>
  )
}