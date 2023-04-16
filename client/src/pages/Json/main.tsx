import { useState } from 'react'

import { useSubmit, GeneratedJson, CodeEditorInput } from './'

const main = () => {
  const [code, setCode] = useState<string | null>(null)

  const { handleSubmit, response, isLoading, error } = useSubmit(code)



  return (
    <main className='flex flex-col items-center justify-between gap-10 md:flex-row height section'>
      <form className='h-[450px] md:h-96 max-w-[600px] w-full text-white font-bold mt-20 md:mt-0' onSubmit={handleSubmit}>
        <CodeEditorInput
          code={code}
          setCode={setCode}
          isLoading={isLoading}
        />
      </form>

      <div className='h-96 max-w-[600px] w-full text-white font-bold mt-28 md:mt-0 mb-20 md:mb-0'>
        <GeneratedJson
          response={response}
          error={error}
        />
      </div>
      <div>
      </div>
    </main>
  )
}

export default main
