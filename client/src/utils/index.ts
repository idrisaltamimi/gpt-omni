import parse from 'html-react-parser'

export function parseHtml(text: string) {
  const pattern = /`([^`]+)`/g
  const highlightedText = text.replace(pattern, '<strong class="text-white">`$1`</strong>')
  return parse(highlightedText)
}

// export function formatListAndText(text: string) {
//   // Replace numbered list with ordered list
//   text = text.replace(/^( *\d+\.[^\n]+\n?)+/gm, function (match) {
//     const items = match.split(/\n/).map(item => `<li>${item.trim().replace(/^\d+\.\s+/, '')}</li>`)
//     return `<ol>${items.join('')}</ol>`
//   })

//   // Replace unnumbered list with unordered list
//   text = text.replace(/^( *[-*+][^\n]+\n?)+/gm, function (match) {
//     const items = match.split(/\n/).map(item => `<li>${item.trim().replace(/^[-*+]\s+/, '')}</li>`)
//     return `<ul>${items.join('')}</ul>`
//   })

//   // Add line break after every colon
//   text = text.replace(/([^:]+):\s*/g, '$1:<br>')

//   // Add line break after every paragraph
//   text = text.replace(/([^>\n]+)(\n{2,})(?!<)/g, '$1<br>')

//   // Replace code blocks
//   text = text.replace(/```(\w+)?\n((?:.*?\n)*?)```/gs, function (match, language, code) {
//     code = code.trim().replace(/</g, '&lt').replace(/>/g, '&gt')
//     return `<pre><SyntaxHighlighter className="${language}">${code}</SyntaxHighlighter></pre>`
//   })

//   return text
// }

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
  input = input.replace(/(.*)(\n|$)/gm, '<p class="mb-6">$1</p>')

  return input
}