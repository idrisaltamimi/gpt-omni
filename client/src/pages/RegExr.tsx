import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { AiResponse, SearchForm } from '../components'
import { useHandleSubmit } from '../hooks'

const RegExr = () => {
  const [input, setInput] = useState<string>('')
  const prevInput = useRef('')
  const form = useHandleSubmit('text', search(input), setInput)
  const { aiResponse, isLoading } = form

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setInput(target.value)
  }

  // useEffect(() => {
  //   if (!isLoading) return

  //   prevInput.current = input
  // }, [isLoading])

  return (
    <main className='flex flex-col items-center justify-between h-full'>
      <div className='w-full bg-charcoal'>
        {isLoading && input}
        {aiResponse !== '' && (
          <div className='w-full max-w-[750px] mx-auto py-6'>
            <AiResponse text={aiResponse} />
          </div>
        )}
      </div>

      <SearchForm
        {...form}
        input={input}
        handleChange={handleChange}
      />
    </main>
  )
}

export default RegExr

const search = (input: string) => (
  `
    write a regexr for: ${input}

    write the regexr inside a code block

    Finally, use the regexr in code.
  `
)