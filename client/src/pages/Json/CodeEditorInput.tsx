import React, { FC } from 'react'
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/github'

interface Props {
  code: string | null
  setCode: (code: string) => void
  isLoading: boolean
}

const CodeEditorInput: FC<Props> = ({ code, setCode, isLoading }) => {
  const handleChange = (newCode: string) => {
    setCode(newCode)
  }

  return (
    <>
      Enter the JSON schema:
      <AceEditor
        mode='javascript'
        theme='github'
        style={styles}
        fontSize={14}
        value={(code === null) ? placeholder : code}
        onChange={handleChange}
        highlightActiveLine={false}
        editorProps={{ $blockScrolling: Infinity }}
      />
      <button
        type='submit'
        className='w-full h-10 mt-4 duration-200 ease-in rounded-md bg-jungle hover:bg-blue'
      >
        {isLoading ? 'Generating...' : 'Generate JSON'}
      </button>
    </>
  )
}

export default CodeEditorInput

const placeholder = `{
  id: string,
  name: string,
  isMember: boolean
}`

const styles = {
  marginTop: '16px',
  padding: '40px',
  height: '100%',
  width: '100%',
  fontWeight: 'bold',
  color: '#343541',
  borderRadius: '12px',
}