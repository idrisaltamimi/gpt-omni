import React, { ChangeEvent, useState } from 'react'
import { CodeBlock, SearchForm } from '../components'
import { useHandleSubmit } from '../hooks'

const RegExr = () => {
  const [input, setInput] = useState<string>('')
  const form = useHandleSubmit('text', search(input), setInput)
  const { aiResponse, isLoading } = form

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setInput(target.value)
  }

  return (
    <main className='flex flex-col items-center justify-between h-full'>
      <div className='w-full bg-charcoal'>
        {input}
        {aiResponse !== '' && (
          <div className='w-full max-w-[750px] mx-auto'>
            <CodeBlock text={aiResponse} />
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

    NOTE:
    return only the regexr code without any additional information and without any text. Don't give any explanations. write only the code block
  `
)