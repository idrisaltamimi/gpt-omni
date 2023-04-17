import { useState } from 'react'

import { RecipeResponse, RecipeForm, useSubmit } from '.'

const Recipe = () => {
  const [input, setInput] = useState<string>('')
  const { isLoading, response, generatedImg, error, handleSubmit } = useSubmit(input)

  return (
    <main className='flex flex-col items-center w-full text-white section'>
      <RecipeForm
        input={input}
        setInput={setInput}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
      />
      <RecipeResponse
        response={response}
        isLoading={isLoading}
        generatedImg={generatedImg}
        input={input}
        error={error}
      />
    </main>
  )
}

export default Recipe