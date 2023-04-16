import { useCopyText } from '../../hooks'
import { formatListAndText, parseHtml } from '../../utils'
import { CodeBlock } from '../../components'

const AiResponse = ({ text }: { text: string }) => {
  const codeRegex = /```([\s\S]*?)```/g
  const parts = text.split(codeRegex)

  return (
    <div className='max-w-[702px]'>
      {parts.map((part, index) => (
        (index % 2 === 0) ? (
          <div key={crypto.randomUUID()} className='font-medium text-lightGrey'>
            {typeof parseHtml(formatListAndText(part)) !== 'string' ? part : parseHtml(formatListAndText(part))}
          </div>
        ) : (
          <Code key={crypto.randomUUID()} text={part} />
        )
      ))}
    </div>
  )
}

const Code = ({ text }: { text: string }) => {
  const { isCopied, handleCopyClick } = useCopyText()

  return (
    <div className='my-6'>
      <button
        className='flex justify-between w-full p-2 text-[12px] font-bold  bg-jet rounded-t-md text-[#ffffff9b]'
        onClick={() => handleCopyClick(text.trim())}
      >
        <span>bash</span>
        {isCopied ? 'Copied' : 'Copy code'}
      </button>
      <CodeBlock language='typescript'>
        {text.trim()}
      </CodeBlock>
    </div>
  )
}

export default AiResponse