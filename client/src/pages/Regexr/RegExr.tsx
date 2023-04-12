import { ChangeEvent, useState } from 'react'

const RegExr = () => {
  const [input, setInput] = useState<string>('')

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setInput(target.value)
  }

  return (
    <main className='flex flex-col items-center justify-between h-full'>

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