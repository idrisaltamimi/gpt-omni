import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFingerprint, faRobot } from '@fortawesome/free-solid-svg-icons'

import { useHandleSubmit } from '../hooks'
import { Loader, SearchForm, CodeBlock } from '../components'
import { formatListAndText, parseHtml } from '../utils'

const Chat = () => {
  const [input, setInput] = useState<string>('')
  const form = useHandleSubmit('textarea', input, setInput)
  const { chat, isLoading, error } = form
  const componentRef = useScrollToBottom(isLoading)

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setInput(target.value)
  }

  return (
    <main className='flex flex-col items-center justify-between h-full'>
      <div className='w-full overflow-y-scroll scrollbar scroll-smooth' ref={componentRef}>
        {chat.length > 0 && (
          chat.map(el => (
            <div
              key={crypto.randomUUID()}
              className={`${el.isBot && 'bg-charcoal'} text-white py-6`}
            >
              <div className='max-w-[750px] mx-auto flex items-baseline gap-4'>
                {el.isBot ? (<>
                  <span className='flex items-center justify-center w-8 rounded-full aspect-square bg-jungle'>
                    <FontAwesomeIcon icon={faRobot} />
                  </span>
                  <AiResponse text={el.text} />

                </>) : (<>

                  <span className='flex items-center justify-center w-8 rounded-full aspect-square bg-blue'>
                    <FontAwesomeIcon icon={faFingerprint} />
                  </span>
                  {el.text}
                </>)}
              </div>
            </div>
          ))
        )}

        <div className='w-full bg-charcoal'>
          {isLoading && <div className='w-full max-w-[750px] mx-auto py-6'><Loader /></div>}
          {error && <div className='w-full max-w-[750px] mx-auto py-6'>Something went wrong, try again later</div>}
        </div>
      </div>

      <SearchForm
        {...form}
        input={input}
        handleChange={handleChange}
      />
    </main>
  )
}

export default Chat

const AiResponse = ({ text }: { text: string }) => {
  const codeRegex = /```([\s\S]*?)```/g
  const parts = text.split(codeRegex)

  return (
    <div className='max-w-[702px]'>
      {parts.map((part, index) => {
        if (index % 2 === 0) {
          return <div key={crypto.randomUUID()} className='font-medium text-[#d1d5db]'>
            {parseHtml(formatListAndText(part))}
          </div>
        } else {
          return <CodeBlock text={part} />
        }
      })}
    </div>
  )
}

const useScrollToBottom = (isLoading: boolean) => {
  const componentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isLoading) return
    if (componentRef.current) {
      componentRef.current.scrollTop = componentRef.current.scrollHeight
    }
  }, [isLoading])

  return componentRef
}