import { ChangeEvent, useState } from 'react'

import { SearchForm } from '../../components'
import { TestCode, GeneratedRegex, TestString } from './'
import useSubmit from './useSubmit'

const RegEx = () => {
  const [input, setInput] = useState<string>('')
  const [testString, setTestString] = useState('Peter Piper picked a peck of pickled peppers')

  const { response, isLoading, error, handleSubmit } = useSubmit(input)

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setInput(target.value)
  }

  return (
    <main className='flex flex-col items-center justify-center h-full gap-10 text-white section height'>
      <div className={`flex flex-col w-full gap-20 md:flex-row bg-jet mt-96 md:mt-10`}>
        <div className='flex flex-col items-start w-full gap-10 whitespace-nowrap basis-full'>
          <GeneratedRegex response={response} />
          <TestString testString={testString} setTestString={setTestString} />
        </div>

        <div className='w-full font-bold text-lightGrey basis-full'>
          <TestCode response={response} testString={testString} />
        </div>
      </div>


      <div className={`flex flex-col items-center justify-center w-full py-10 whitespace-normal`}>
        <label
          htmlFor='regex'
          className='font-bold text-lightGrey max-w-[750px] w-full text-lg'
        >
          Write me a javascript regular expression that:
        </label>
        <SearchForm
          id='regex'
          isLoading={isLoading}
          placeholder={'For example: remove all letters "c" from a string'}
          input={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          button
          submitButton={isLoading ? 'Generating...' : 'Generate RegEx'}
        />
      </div>
    </main>
  )
}

export default RegEx