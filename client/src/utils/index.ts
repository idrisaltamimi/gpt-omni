import parse from 'html-react-parser'

export function parseHtml(text: string) {
  const pattern = /`([^`]+)`/g
  const highlightedText = text.replace(pattern, '<strong class="text-white">`$1`</strong>')
  return parse(highlightedText)
}

export function fetchData(method: string, input: string, endpoint?: string) {
  return fetch(`https://gpt-omni.onrender.com${endpoint || '/'}`, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors',
    body: JSON.stringify({ content: input })
  })
}

export function formatListAndText(input: string) {
  // Convert numbered list to ordered list
  input = input.replace(/^(\d+\. .+)$/gm, '<li>$1</li>')
  input = '<ol>' + input + '</ol>'

  // Convert unordered list to unordered list
  input = input.replace(/^(- .+)$/gm, '<li>$1</li>')
  input = '<ul>' + input + '</ul>'

  // Add line break after every colon
  input = input.replace(/([^:]+):/g, '$1:<br>')

  // Add line break after every paragraph
  input = input.replace(/(\r\n?|\n){2}(?!$)/g, "<br>\n")

  return input
}

export function getMatchedText(input: string, regex: RegExp) {
  const regExr = regex
  const matches = input.match(regExr)
  const extractedText = matches && new RegExp(matches[1]) || ''

  return extractedText as RegExp
}