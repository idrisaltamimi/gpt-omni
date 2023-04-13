import { ChangeEvent, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { SearchForm } from '../../components'
import { useCopyText } from '../../hooks'
import useSubmit from './useSubmit'

const RegEx = () => {
  const [input, setInput] = useState<string>('')
  const [testString, setTestString] = useState('Peter Piper picked a peck of pickled peppers')

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

  const regex = new RegExp(response?.split('/')[1], 'g')

  return (
    <main className='flex flex-col items-center justify-between h-full gap-10 py-10 text-white md:flex-row section height'>
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
            onClick={() => handleCopyClick(response)}
            disabled={response === '' || response === ''}
            className='relative h-[50px] w-full text-xl font-bold rounded-md bg-charcoal flex justify-center items-center max-w-[400px]'
          >
            {response}
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

      <div className='max-w-[600px] w-full font-semibold text-lightGrey'>
        Test RegEx:
        <div className='w-full max-h-[250px]'>
          <span className='block w-full bg-charcoal text-[12px] font-semibold p-2 rounded-t-md'>JavaScript</span>
          <SyntaxHighlighter
            language='javascript'
            style={a11yDark}
            customStyle={codeStyles}
            wrapLongLines={true}
            showInlineLineNumbers={true}
          >
            {`const regex = ${response === '' ? '/b/g' : response} \nconst testString = ${testString} \nconst matches = testString.replace(regex, '') \n\nconsole.log(matches)`}
          </SyntaxHighlighter>
        </div>

        <div className='flex flex-col items-start w-full gap-2 mt-10 mb-10 font-semibold text-lightGrey'>
          Output:
          <span className='w-full px-4 py-2 text-base font-bold text-left rounded-md bg-charcoal'>
            {testString.replace(response === '' ? /b/g : regex, '')}
          </span>
        </div>
      </div>
    </main>
  )
}

export default RegEx

const codeStyles = {
  backgroundColor: '#191919',
  borderRadius: '0 0 8px 8px',
  padding: '24px',
  fontSize: '14px',
  fontWeight: 700,
}