import { useState } from 'react'
import { CodeBlock } from '../../components'
import ErrorBoundary from '../../ErrorBoundary'

import { TestCode, GeneratedRegex, TestString, RegexForm, ErrorHandler } from './'
import useSubmit from './useSubmit'

const RegEx = () => {
  const [input, setInput] = useState<string>('')
  const [testString, setTestString] = useState('Peter Piper picked a peck of pickled peppers')

  const { response, isLoading, error, handleSubmit } = useSubmit(input)

  return (
    <main className='flex flex-col items-center justify-center h-full gap-10 text-white section height'>
      <div className={`flex flex-col w-full gap-20 md:flex-row bg-jet md:mt-10 order-2 md:order-1 py-20`}>
        <div className='flex flex-col items-start w-full gap-10 whitespace-nowrap basis-full'>
          <GeneratedRegex response={response} />
          <TestString testString={testString} setTestString={setTestString} />
        </div>

        <div className='w-full font-bold text-lightGrey basis-full'>
          <ErrorBoundary fallback={<ErrorHandler />}>
            <TestCode response={response} testString={testString} />
          </ErrorBoundary>
        </div>
      </div>

      <RegexForm
        isLoading={isLoading}
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />
    </main>
  )
}

export default RegEx