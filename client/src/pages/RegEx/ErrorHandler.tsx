import React from 'react'
import { CodeBlock } from '../../components'

const ErrorHandler = () => {
  return (
    <>
      Error Message:
      <div className='w-full max-h-[250px] mt-4'>
        <span className='block w-full bg-charcoal text-[12px] font-semibold p-2 rounded-t-md'>Error</span>
      </div>
      <CodeBlock>
        Error: The generated regex code is not applicable. Try adjusting the regex description
      </CodeBlock>
    </>
  )
}

export default ErrorHandler
