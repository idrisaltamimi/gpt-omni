import { useEffect, useState } from 'react'

const useSortCode = (aiResponse: string) => {
  const [sortedResponse, setSortedResponse] = useState<any>([])


  useEffect(() => {
    if (aiResponse === '') return

    const lines = aiResponse.split('\n')
    const objects = []

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      if (line.startsWith('```')) {
        const language = line.substring(3)
        objects.push({ isCode: true, item: '', language: language })
        i++
        while (i < lines.length && !lines[i].startsWith('```')) {
          objects[objects.length - 1].item += lines[i] + '\n'
          i++
        }
      } else {
        objects.push({ isCode: false, item: line, language: '' })
      }
    }

    setSortedResponse(objects)
  }, [aiResponse])

  return [sortedResponse]
}

export default useSortCode