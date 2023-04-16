import { FC } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface Props {
  children: any
  style?: { [key: string]: React.CSSProperties }
  styles?: any
  language?: string
}

const CodeBlock: FC<Props> = ({ children, style, styles = {}, language }) => {
  const codeStyles = {
    backgroundColor: '#191919',
    borderRadius: '0 0 8px 8px',
    padding: '24px',
    fontSize: '14px',
    fontWeight: 700,
    ...styles
  }

  return (
    <SyntaxHighlighter
      language={language ? language : 'javascript'}
      style={style ? style : a11yDark}
      customStyle={codeStyles}
      wrapLongLines={true}
      showInlineLineNumbers={true}
    >
      {children}
    </SyntaxHighlighter>

  )
}

export default CodeBlock
