import React, { FC } from 'react'

import { CodeBlock } from '../../components'
import { useCopyText } from '../../hooks'

interface Props {
  response: string
  error: boolean
}

const GeneratedJson: FC<Props> = ({ response, error }) => {
  const { handleCopyClick, isCopied } = useCopyText()

  const aiResponse = error ? 'Something went wrong. Try again later..' :
    response === '' ? responsePlaceholder :
      response === 'error' ? 'Invalid Schema, please enter a valid schema..' : response
  return (
    <>
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
    </>
  )
}

export default GeneratedJson

const responsePlaceholder = `{
  "id": "12345",
  "name": "John Doe",
  "isMember": true
}`