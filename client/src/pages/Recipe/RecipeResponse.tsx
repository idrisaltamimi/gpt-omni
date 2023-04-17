import { FC } from 'react'
import parse from 'html-react-parser'

interface Props {
  response: string
  isLoading: boolean
  generatedImg: string
  input: string
  error: boolean
}

const RecipeResponse: FC<Props> = ({ response, isLoading, generatedImg, input, error }) => {
  const string = response.replace(/<\/h1>/, '</h1>\n' + `<img src='${generatedImg}' alt='${input}' class='mt-4 rounded-md w-[256px] aspect-square' />`)

  return (
    <>
      {error ?
        <div className='w-full max-w-[700px] mb-10 bg-charcoal rounded-md p-4 md:p-10'>
          <h1 className='text-lg font-semibold text-center'>Something went wrong!! Try again...</h1>
        </div>
        :
        (response !== '' && !isLoading) && (
          <div className='w-full max-w-[700px] mb-10 bg-charcoal rounded-md p-4 md:p-10'>
            {(parse(string))}
          </div>
        )
      }
    </>
  )
}

export default RecipeResponse
