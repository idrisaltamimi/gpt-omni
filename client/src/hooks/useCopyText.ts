import { useRef, useState } from 'react'

const useCopyText = () => {
  const [isCopied, setIsCopied] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | undefined>()

  const handleCopyClick = (text: string) => {
    navigator.clipboard.writeText(text)

    setIsCopied(true)
    clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }
  return { isCopied, handleCopyClick }
}

export default useCopyText