import { ChangeEvent, FC, FormEvent } from 'react'

interface props {
  input: string
  setInput: (value: string) => void
  isLoading: boolean
  handleSubmit: (e: FormEvent) => void
}

const RecipeForm: FC<props> = ({ input, setInput, isLoading, handleSubmit }) => {
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setInput(target.value)
  }

  return (
    <form onSubmit={handleSubmit} className='max-w-[620px] w-full my-20'>
      <label
        htmlFor='name'
        className='text-lg font-extrabold text-lightGrey'
      >
        What do you want to cook:
        <input
          id='name'
          type='text'
          placeholder='ex. Classic Spaghetti Carbonara'
          value={input}
          onChange={handleChange}
          className='block w-full h-12 px-4 mt-2 font-medium rounded-md text-jet'
        />
      </label>
      <button
        className='w-full h-12 mt-4 font-bold transition-colors duration-200 ease-in rounded-md bg-jungle hover:bg-blue'
      >
        {isLoading ? 'Generating...' : 'Generate recipe'}
      </button>
    </form>
  )
}

export default RecipeForm
