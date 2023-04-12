import { ChangeEvent, FormEvent, useState } from 'react'
import { SearchForm } from '../../components'
import { useCopyText } from '../../hooks'
import { fetchData } from '../../utils'

const RegExr = () => {
  const [input, setInput] = useState<string>('')
  const [response, setResponse] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [testString, setTestString] = useState('')
  const [error, setError] = useState<boolean>(false)

  const { handleCopyClick, isCopied } = useCopyText()

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setInput(target.value)
  }

  const handelTestStringChanged = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setTestString(target.value)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (isLoading) return
    setError(false)
    setIsLoading(true)

    try {
      const response = await fetchData('POST',
        `write me a javascript regular expression that ${input} as a literal without variable declaration. and place it between {{{{regexr code}}}}`
      )

      if (!response.ok) return setError(true); setIsLoading(false)

      const result = await response.json()
      setResponse(result.response)

    } catch (error) {
      console.log(error)
      setError(true)
    }

    setIsLoading(false)
  }
  const regex = /{{{{(.*?)}}}}/
  const matches = response.match(regex)
  const extractedText = matches && matches[1] || ''

  return (
    <main className='flex items-center justify-center h-full text-white section height'>
      <div className='flex flex-col items-start w-full gap-10 max-w-[550px] whitespace-nowrap'>
        <div className='w-full whitespace-normal'>
          write me a javascript regular expression that:
          <SearchForm
            isLoading={isLoading}
            placeholder={'enter regexr code'}
            input={input}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>

        <div className='flex flex-col items-start w-full gap-4 font-semibold sm:items-center sm:flex-row text-lightGrey'>
          Generated RegEx:
          <button
            onClick={() => handleCopyClick(extractedText)}
            disabled={response === '' || extractedText === ''}
            className='relative h-[50px] w-full text-xl font-bold rounded-md bg-charcoal flex justify-center items-center max-w-[400px]'
          >
            {extractedText}
            <span className='absolute top-0 translate-y-[-80%] right-0 text-[12px]'>{isCopied ? 'Copied' : 'Click to copy'}</span>
          </button>
        </div>

        <div className='flex flex-col items-start w-full gap-4 font-semibold sm:flex-row text-lightGrey'>
          <label htmlFor='test-string'>Test String:</label>
          <textarea
            id='test-string'
            cols={30}
            rows={10}
            value={testString}
            onChange={handelTestStringChanged}
            className='w-full max-w-[400px] sm:ml-auto bg-charcoal rounded-md outline-none border-2 border-charcoal hover:border-jungle focus:border-jungle duration-200 ease-in p-5'
          />
        </div>
      </div>
    </main>
  )
}

export default RegExr