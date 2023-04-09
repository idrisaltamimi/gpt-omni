import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { useCopyText, useHandleSubmit } from '../hooks'
import { Loader } from '../components'
import { parseHtml } from '../utils'

const Chat = () => {
  const { chat, handleSubmit, isLoading, handleChange, input } = useHandleSubmit('textarea')

  return (
    <main className='flex flex-col items-center justify-between h-full'>
      <div className='w-full'>
        {chat.length > 0 &&
          chat.map(el => (
            <div
              key={crypto.randomUUID()}
              className={`${el.isBot && 'bg-gunmetal'} text-white`}
            >
              {el.isBot ? (
                <div className='block max-w-[750px] mx-auto'>
                  <CodeBlock text={el.text} />
                </div>
              ) : (
                <p className='bg-gray-400 max-w-[750px] mx-auto'>{el.text}</p>
              )}
            </div>
          )
          )
        }
        <div className='max-w-[750px] mx-auto'>
          {true && <Loader />}
        </div>
      </div>

      <form onSubmit={handleSubmit} className='relative flex items-center justify-center w-full min-h-[50px] gap-3 my-10 mt-auto max-w-[750px]'>
        <input
          type='text'
          className={`relative w-full rounded-lg h-full px-5 shadow-sm bg-darkGrey text-white bg-grey outline-none hover:border-jungle border-[1px] border-grey focus:border-jungle transition-all duration-200`}
          placeholder='Send a message...'
          value={input}
          onChange={handleChange}
        />
        <button
          className='absolute h-full text-white transition-all duration-200 ease-in translate-y-[-50%] bg-blue-600 rounded-full outline-none aspect-square bg-darkGrey  focus:bg-jungle top-1/2 right-0 disabled:opacity-50'
          type='submit'
          disabled={input === ''}
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
          return <p key={crypto.randomUUID()}>{parseHtml(part)}</p>
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