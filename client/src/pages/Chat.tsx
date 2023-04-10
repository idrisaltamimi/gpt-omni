import { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFingerprint, faRobot } from '@fortawesome/free-solid-svg-icons'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { useCopyText, useHandleSubmit } from '../hooks'
import { Loader, SearchForm } from '../components'
import { formatListAndText, parseHtml } from '../utils'

const Chat = () => {
  const componentRef = useRef<HTMLDivElement>(null)
  const form = useHandleSubmit('textarea')
  const { chat, isLoading, error } = form

  useEffect(() => {
    if (!isLoading) return
    if (componentRef.current) {
      componentRef.current.scrollTop = componentRef.current.scrollHeight
    }
  }, [isLoading])

  return (
    <main className='flex flex-col items-center justify-between h-full'>
      <div className='w-full overflow-y-scroll scrollbar scroll-smooth' ref={componentRef}>
        {chat.length > 0 && (
          chat.map(el => (
            <div
              key={crypto.randomUUID()}
              className={`${el.isBot && 'bg-charcoal'} text-white py-6`}
            >
              {el.isBot ? (
                <div className='max-w-[750px] mx-auto flex items-baseline gap-4'>
                  <div className='flex items-center justify-center w-8 rounded-full aspect-square bg-jungle'>
                    <FontAwesomeIcon icon={faRobot} />
                  </div>
                  <div className='max-w-[702px]'>
                    <CodeBlock text={el.text} />
                  </div>
                </div>
              ) : (
                <div className='bg-gray-400 max-w-[750px] mx-auto flex items-baseline gap-4'>
                  <div className='flex items-center justify-center w-8 rounded-full aspect-square bg-blue'>
                    <FontAwesomeIcon icon={faFingerprint} />
                  </div>
                  <p className=''>
                    {el.text}
                  </p>
                </div>
              )}
            </div>
          ))
        )}
        <div className='w-full bg-charcoal'>
          {isLoading && <div className='w-full bg-charcoal max-w-[750px] mx-auto py-6'><Loader /></div>}
          {error && <div className='w-full bg-charcoal max-w-[750px] mx-auto py-6'>Something went wrong, try again later</div>}
        </div>
      </div>

      <SearchForm {...form} />
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
          return <div key={crypto.randomUUID()} className='font-medium text-[#d1d5db]'>
            {parseHtml(formatListAndText(part))}
          </div>
        } else {
          return <CodeSyntax text={part} />
        }
      })}
    </>
  )
}

const CodeSyntax = ({ text }: { text: string }) => {
  const { isCopied, handleCopyClick } = useCopyText()

  return (
    <div className='my-6'>
      <button
        className='block w-full p-2 text-[12px] font-bold text-right uppercase bg-[#343541] rounded-t-md'
        onClick={() => handleCopyClick(text.trim())}
      >
        {isCopied ? 'Copied' : 'Copy code'}
      </button>
      <SyntaxHighlighter
        key={crypto.randomUUID()}
        language='typescript'
        style={a11yDark}
        customStyle={codeStyles}
        wrapLongLines={true}
        showInlineLineNumbers
      >
        {text.trim()}
      </SyntaxHighlighter>
    </div>
  )
}

const codeStyles = {
  backgroundColor: '#191919',
  padding: '16px',
  fontSize: '14px',
  fontWeight: 700
}