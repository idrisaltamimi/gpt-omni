import { useCopyText } from '../hooks'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const CodeBlock = ({ text }: { text: string }) => {
  const { isCopied, handleCopyClick } = useCopyText()

  return (
    <div className='my-6'>
      <button
        className='block w-full p-2 text-[12px] font-bold text-right uppercase bg-[#343541] rounded-t-md text-white'
        onClick={() => handleCopyClick(text.trim())}
      >
        {isCopied ? 'Copied' : 'Copy code'}
      </button>
      <SyntaxHighlighter
        key={crypto.randomUUID()}
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

export default CodeBlock

const codeStyles = {
  backgroundColor: '#191919',
  borderRadius: '0 0 8px 8px',
  padding: '16px',
  fontSize: '14px',
  fontWeight: 700
}