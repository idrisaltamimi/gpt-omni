import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

  const { chat, handleSubmit, isLoading } = useHandleSubmit(input)

  return (
    <main className='flex flex-col justify-between h-full'>
      <div className='w-full'>
        {chat.length > 0 &&
          chat.map(el => (
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

      <form onSubmit={handleSubmit} className='relative flex items-center justify-center w-full h-32 gap-3 py-10 mt-auto bg-darkGrey'>
        <input
          type='text'
          className='relative z-10 max-w-[500px] w-full rounded-lg h-full px-5 shadow-[0_0_10px_5px_rgba(255,255,255,.1)]'
          placeholder='Send a message...'
          value={input}
          onChange={handleChange}
        />
        <button
          className='h-full text-white transition-all duration-300 ease-in bg-blue-600 rounded-full aspect-square bg-gunmetal hover:bg-seaGreen hover:shadow-[0_0_60px_1px_seaGreen] hover:scale-110'
          type='submit'
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </main>
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