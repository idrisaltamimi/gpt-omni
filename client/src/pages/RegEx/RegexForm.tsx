import { ChangeEvent, FC, FormEvent } from 'react'

interface Props {
  isLoading: boolean
  input: string
  setInput: (value: string) => void
  handleSubmit: (e: FormEvent) => void
}


const RegexForm: FC<Props> = ({ isLoading, input, setInput, handleSubmit }) => {
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setInput(target.value)
  }

  return (
    <form onSubmit={handleSubmit} className={`relative w-full max-w-[750px] order-1 md:order-2  mt-[500px] md:mt-0 md:mb-20`}>
      <label
        htmlFor='regex'
        className='font-bold text-lightGrey max-w-[750px] w-full text-lg'
      >
        Write me a javascript regular expression that:
        <input
          id='regex'
          type='text'
          className={`w-full rounded-lg px-5 shadow-sm text-jet outline-none hover:border-jungle border-2 border-grey focus:border-jungle transition-all ease-in duration-200 h-[50px]`}
          placeholder={'For example: remove all letters "c" from a string'}
          value={input}
          onChange={handleChange}
        />
      </label>

      <button
        type='submit'
        onClick={handleSubmit}
        className='block w-full px-6 py-3 mt-4 font-bold transition-all duration-200 ease-in rounded-md bg-jungle hover:bg-blue'
      >
        {isLoading ? 'Generating...' : 'Generate RegEx'}
      </button>
    </form>
  )
}

export default RegexForm
