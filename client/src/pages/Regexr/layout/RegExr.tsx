import { ChangeEvent, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { SearchForm } from '../../../components'
import { useCopyText } from '../../../hooks'
import { getMatchedText } from '../../../utils'
import { useSubmit } from '../hooks'

const RegExr = () => {
  const [input, setInput] = useState<string>('')
  const [testString, setTestString] = useState('The quick brown fox jumped over the lazy dog. The cat in the hat wore a red bowtie. She sells sea shells by the seashore. Peter Piper picked a peck of pickled peppers. How can a clam cram in a clean cream can?')

  const { response, isLoading, error, handleSubmit } = useSubmit(input)
  const { handleCopyClick, isCopied } = useCopyText()

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setInput(target.value)
  }

  const handelTestStringChanged = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setTestString(target.value)
  }

  return (
    <main className='flex items-center justify-between h-full text-white section height'>
      <div className='flex flex-col items-start w-full gap-10 max-w-[550px] whitespace-nowrap'>
        <div className='w-full whitespace-normal'>
          <label htmlFor='regex'>write me a javascript regular expression that:</label>
          <SearchForm
            id='regex'
            isLoading={isLoading}
            placeholder={'For example: remove all letters "c" from a string'}
            input={input}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>

        <div className='flex flex-col items-start w-full gap-4 font-semibold sm:items-center sm:flex-row text-lightGrey'>
          Generated RegEx:
          <button
            onClick={() => handleCopyClick(getMatchedText(response))}
            disabled={response === '' || getMatchedText(response) === ''}
            className='relative h-[50px] w-full text-xl font-bold rounded-md bg-charcoal flex justify-center items-center max-w-[400px]'
          >
            {getMatchedText(response)}
            <span className='absolute top-0 translate-y-[-80%] right-0 text-[12px]'>{isCopied ? 'Copied' : 'Click to copy'}</span>
          </button>
        </div>

        <div className='flex flex-col items-start w-full gap-4 font-semibold sm:flex-row text-lightGrey'>
          <label htmlFor='test-string'>Test String:</label>
          <textarea
            id='test-string'
            rows={7}
            value={testString}
            onChange={handelTestStringChanged}
            className='w-full max-w-[400px] max-h-[250px] sm:ml-auto bg-charcoal rounded-md outline-none border-2 border-charcoal hover:border-jungle focus:border-jungle duration-200 ease-in p-5'
          />
        </div>
      </div>

      <div className='max-w-[600px] w-full'>
        <SyntaxHighlighter
          language='javascript'
          style={a11yDark}
          customStyle={codeStyles}
          wrapLongLines={true}
          showInlineLineNumbers={true}
        >
          {`const regex = ${getMatchedText(response) === '' ? '/b/g' : getMatchedText(response)} \nconst testString = ${testString} \nconst matches = testString.match(regex) \n\nconsole.log(matches)`}
        </SyntaxHighlighter>
      </div>
    </main>
  )
}

export default RegExr

const codeStyles = {
  backgroundColor: '#191919',
  borderRadius: '0 0 8px 8px',
  padding: '24px',
  fontSize: '14px',
  fontWeight: 700,
}