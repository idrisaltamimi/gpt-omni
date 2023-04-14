import { ChangeEvent, FC } from 'react'

interface Props {
  testString: string,
  setTestString: (value: string) => void
}

const TestString: FC<Props> = ({ testString, setTestString }) => {
  const handelTestStringChanged = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setTestString(target.value)
  }

  return (
    <div className='flex flex-col items-start w-full gap-4 font-semibold text-lightGrey'>
      <label htmlFor='test-string'>Test String:</label>
      <textarea
        id='test-string'
        rows={7}
        value={testString}
        onChange={handelTestStringChanged}
        className='w-full max-h-[250px] bg-charcoal rounded-md outline-none border-2 border-charcoal hover:border-jungle focus:border-jungle duration-200 ease-in p-5'
      />
    </div>
  )
}

export default TestString
