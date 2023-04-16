import { FC } from 'react'
import { CodeBlock } from '../../components'

interface Props {
  response: string
  testString: string
}

const TestCode: FC<Props> = ({ response, testString }) => {
  const regex = new RegExp(response?.split('/')[1], 'g')

  return (
    <>
      Test RegEx:
      <div className='w-full max-h-[250px] mt-4'>
        <span className='block w-full bg-charcoal text-[12px] font-semibold p-2 rounded-t-md'>JavaScript</span>
        <CodeBlock>
          {`const regex = ${response === '' ? '/b/g' : response} \nconst testString = ${testString} \nconst string = testString.replace(regex, '') \n\nconsole.log(string)`}
        </CodeBlock>
      </div>

      <div className='flex flex-col items-start w-full gap-2 mt-10 mb-10 font-semibold text-lightGrey'>
        Output:
        <span className='w-full px-4 py-2 text-base font-bold text-left rounded-md bg-charcoal'>
          {testString.replace(response === '' ? /b/g : regex, '')}
        </span>
      </div>
    </>
  )
}

export default TestCode