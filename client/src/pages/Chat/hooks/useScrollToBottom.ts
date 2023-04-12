import { useEffect, useRef } from 'react'

const useScrollToBottom = (isLoading: boolean) => {
  const componentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isLoading) return
    if (componentRef.current) {
      componentRef.current.scrollTop = componentRef.current.scrollHeight
    }
  }, [isLoading])

  return componentRef
}

export default useScrollToBottom