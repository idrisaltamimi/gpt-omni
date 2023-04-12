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
}

const SearchForm: FC<Props> = ({ isLoading, input, placeholder, handleChange, handleSubmit, margin, id }) => {
  return (
    <form onSubmit={handleSubmit} className={`relative flex items-center justify-center w-full gap-3 ${margin && 'mt-14'} max-w-[750px]`}>
      <input
        id={id}
        type='text'
        className={`relative w-full rounded-lg px-5 shadow-sm bg-darkGrey text-white bg-grey outline-none hover:border-jungle border-2 border-grey focus:border-jungle transition-all ease-in duration-200 h-[50px] ${margin && 'mb-10'}`}
        placeholder={placeholder}
        value={input}
        onChange={handleChange}
      />
      <button
        className='absolute text-white transition-all duration-200 ease-in translate-y-[-50%] bg-blue-600 rounded-full outline-none aspect-square bg-darkGrey  focus:bg-jungle top-[25px] right-0 disabled:opacity-50 w-[50px]'
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

export default SearchForm
