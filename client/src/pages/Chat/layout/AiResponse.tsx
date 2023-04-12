import { useCopyText } from '../../../hooks'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { formatListAndText, parseHtml } from '../../../utils'

const AiResponse = ({ text }: { text: string }) => {
  const codeRegex = /```([\s\S]*?)```/g
  const parts = text.split(codeRegex)

  return (
    <div className='max-w-[702px]'>
      {parts.map((part, index) => {
        if (index % 2 === 0) {
          return <div key={crypto.randomUUID()} className='font-medium text-lightGrey'>
            {parseHtml(formatListAndText(part))}
          </div>
        } else {
          return <CodeBlock key={crypto.randomUUID()} text={part} />
        }
      })}
    </div>
  )
}

const CodeBlock = ({ text }: { text: string }) => {
  const { isCopied, handleCopyClick } = useCopyText()

  return (
    <div className='mb-6'>
      <button
        className='flex justify-between w-full p-2 text-[12px] font-bold  bg-[#343541] rounded-t-md text-[#ffffff9b]'
        onClick={() => handleCopyClick(text.trim())}
      >
        <span>bash</span>
        {isCopied ? 'Copied' : 'Copy code'}
      </button>
      <SyntaxHighlighter
        language='typescript'
        style={a11yDark}
        customStyle={codeStyles}
        wrapLongLines={true}
        showInlineLineNumbers
      >
        {text.trim()}
      </SyntaxHighlighter>
    </div>
  )
}

export default AiResponse

const codeStyles = {
  backgroundColor: '#191919',
  borderRadius: '0 0 8px 8px',
  padding: '16px',
  fontSize: '14px',
  fontWeight: 700
}