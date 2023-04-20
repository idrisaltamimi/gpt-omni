import React, { ChangeEvent, FC, FormEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faPaperPlane } from '@fortawesome/free-solid-svg-icons'


interface Props {
  isLoading: boolean
  input: string
  setInput: (value: string) => void
  handleSubmit: (e: FormEvent) => void
}

const ChatForm: FC<Props> = ({ isLoading, input, setInput, handleSubmit }) => {
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setInput(target.value)
  }

  return (
    <form onSubmit={handleSubmit} className={`relative w-full md:my-14 max-w-[750px] px-2`}>
      <input
        id='chat'
        type='text'
        className={`relative w-full rounded-lg px-5 shadow-sm text-white bg-grey outline-none hover:border-jungle border-2 border-grey focus:border-jungle transition-all ease-in duration-200 h-[50px] mb-4`}
        placeholder='Send a message...'
        value={input}
        onChange={handleChange}
      />
      <button
        className='absolute text-lightGrey hover:text-white transition-all duration-200 ease-in translate-y-[-50%] bg-blue-600 rounded-full outline-none aspect-square bg-[transparent]  focus:bg-jungle top-[25px] right-0 disabled:opacity-50 w-[50px]'
        type='submit'
        disabled={input === ''}
      >
        {isLoading ? (
          <FontAwesomeIcon icon={faCircleNotch} className='animate-spin' />
        ) : (
          <FontAwesomeIcon icon={faPaperPlane} />
        )}
      </button>
    </form>
  )
}

export default ChatForm
