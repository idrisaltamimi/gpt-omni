import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFingerprint, faRobot } from '@fortawesome/free-solid-svg-icons'

import { Loader, SearchForm } from '../../components'
import { useSubmit, useScrollToBottom, AiResponse } from '.'

const Chat = () => {
  const [input, setInput] = useState<string>('')
  const { chat, handleSubmit, isLoading, error } = useSubmit(input, setInput)
  const componentRef = useScrollToBottom(isLoading)

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setInput(target.value)
  }

  return (
    <main className='flex flex-col items-center justify-between height'>
      <div className='w-full overflow-y-scroll scrollbar scroll-smooth' ref={componentRef}>
        {chat.length > 0 && (
          chat.map(el => (
            <div
              key={crypto.randomUUID()}
              className={`${el.isBot && 'bg-charcoal'} text-white py-6`}
            >
              <div className='max-w-[1000px] mx-auto flex items-baseline gap-4 margin'>
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
          {isLoading && (
            <div className='max-w-[1000px] mx-auto flex items-baseline gap-4 margin text-white py-6'>
              <Loader />
            </div>
          )}
          {error && (
            <div className='max-w-[1000px] mx-auto flex items-baseline gap-4 margin text-white py-6'>
              <span className='flex items-center justify-center w-8 rounded-full aspect-square bg-jungle'>
                <FontAwesomeIcon icon={faRobot} />
              </span>
              Something went wrong, try again later
            </div>
          )}
        </div>
      </div>

      <SearchForm
        id='chat'
        isLoading={isLoading}
        input={input}
        placeholder='Send a message...'
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        margin
      />
    </main>
  )
}

export default Chat