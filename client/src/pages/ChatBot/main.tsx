import { ChangeEvent, useState } from 'react'

import { SearchForm } from '../../components'
import { useSubmit, useScrollToBottom, ChatLoading, Chat } from '.'

const ChatBot = () => {
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
        <Chat chat={chat} />
        <ChatLoading error={error} isLoading={isLoading} />
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

export default ChatBot