import { ChangeEvent, FC, FormEvent } from 'react'
import { faCircleNotch, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  isLoading: boolean
  input: string
  id: string
  placeholder: string
  handleChange: (e: ChangeEvent) => void
  handleSubmit: (e: FormEvent) => void
  margin?: boolean
  button?: boolean
  submitButton?: any
}

const SearchForm: FC<Props> = ({ isLoading, input, placeholder, handleChange, handleSubmit, margin, id, button, submitButton }) => {
  return (
    <form onSubmit={handleSubmit} className={`relative w-full ${margin && 'mt-14'} max-w-[750px]`}>
      <input
        id={id}
        type='text'
        className={`relative w-full rounded-lg px-5 shadow-sm text-white bg-grey outline-none hover:border-jungle border-2 border-grey focus:border-jungle transition-all ease-in duration-200 h-[50px] ${margin && 'mb-10'}`}
        placeholder={placeholder}
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

      {button && (
        <button
          type='submit'
          onClick={handleSubmit}
          className='block w-full px-6 py-3 mt-4 font-bold transition-all duration-200 ease-in rounded-md bg-jungle hover:bg-blue'
        >
          {submitButton}
        </button>
      )}
    </form>
  )
}

export default SearchForm
