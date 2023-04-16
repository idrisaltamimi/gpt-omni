import { useState } from 'react'
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/github'

import { CodeBlock } from '../../components'
import { useSubmit } from './'
import { useCopyText } from '../../hooks'

const main = () => {
  const [code, setCode] = useState<string | null>(null)

  const { handleSubmit, response, isLoading, error } = useSubmit(code)
  const { handleCopyClick, isCopied } = useCopyText()

  const handleChange = (newCode: string) => {
    setCode(newCode)
  }

  const aiResponse = error ? 'Something went wrong. Try again later..' :
    response === '' ? responsePlaceholder :
      response === 'error' ? 'Invalid Schema, please enter a valid schema..' : response

  return (
    <main className='flex flex-col items-center justify-between gap-10 md:flex-row height section'>
      <form className='h-[450px] md:h-96 max-w-[600px] w-full text-white font-bold mt-20 md:mt-0' onSubmit={handleSubmit}>
        Enter the JSON schema:
        <AceEditor
          mode='javascript'
          theme='github'
          style={styles}
          fontSize={14}
          value={(code === null) ? placeholder : code}
          onChange={handleChange}
          highlightActiveLine={false}
          editorProps={{ $blockScrolling: Infinity }}
        />
        <button
          type='submit'
          className='w-full h-10 mt-4 duration-200 ease-in rounded-md bg-jungle hover:bg-blue'
        >
          {isLoading ? 'Generating...' : 'Generate JSON'}
        </button>
      </form>

      <div className='h-96 max-w-[600px] w-full text-white font-bold mt-28 md:mt-0 mb-20 md:mb-0'>
        Generated JSON:
        <CodeBlock
          styles={{ borderRadius: '8px', width: '100%', height: '100%', padding: '16px', marginTop: '16px' }}
        >
          {aiResponse}
        </CodeBlock>
        <button
          onClick={() => handleCopyClick(aiResponse)}
          className='w-full h-10 mt-4 duration-200 ease-in rounded-md bg-charcoal hover:bg-blue'
        >
          {isCopied ? 'Copied' : 'Copy Code'}
        </button>
      </div>
      <div>
      </div>
    </main>
  )
}

export default main

const responsePlaceholder = `{
  "id": "12345",
  "name": "John Doe",
  "isMember": true
}`

const placeholder = `{
  id: string,
  name: string,
  isMember: boolean
}`

const styles = {
  marginTop: '16px',
  padding: '40px',
  height: '100%',
  width: '100%',
  fontWeight: 'bold',
  color: '#343541',
  borderRadius: '12px',
}