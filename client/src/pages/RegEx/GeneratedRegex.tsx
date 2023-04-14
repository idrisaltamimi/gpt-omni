import { useCopyText } from '../../hooks'

const GeneratedRegex = ({ response }: { response: string }) => {
  const { handleCopyClick, isCopied } = useCopyText()

  return (
    <div className='flex flex-col items-start w-full gap-4 font-semibold text-lightGrey'>
      Generated RegEx:
      <button
        onClick={() => handleCopyClick(response)}
        disabled={response === '' || response === ''}
        className='relative h-[50px] w-full text-xl font-bold rounded-md bg-charcoal flex justify-center items-center'
      >
        {response}
        <span className='absolute top-0 translate-y-[-80%] right-0 text-[12px]'>{isCopied ? 'Copied' : 'Click to copy'}</span>
      </button>
    </div>
  )
}

export default GeneratedRegex
