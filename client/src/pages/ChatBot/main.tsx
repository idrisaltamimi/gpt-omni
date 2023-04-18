import { useState } from 'react'

import { useSubmit, useScrollToBottom, ChatLoading, Chat, ChatForm } from '.'

const ChatBot = () => {
  const [input, setInput] = useState<string>('')
  const { chat, handleSubmit, isLoading, error } = useSubmit(input, setInput)
  const componentRef = useScrollToBottom(isLoading)

  return (
    <main className='flex flex-col items-center justify-between height'>
      <div className='w-full overflow-y-scroll scrollbar scroll-smooth' ref={componentRef}>
        <Chat chat={chat} />
        <ChatLoading error={error} isLoading={isLoading} />
      </div>

      <ChatForm
        isLoading={isLoading}
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />
    </main>
  )
}

export default ChatBot