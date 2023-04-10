import parse from 'html-react-parser'

export function parseHtml(text: string) {
  const pattern = /`([^`]+)`/g;
  const highlightedText = text.replace(pattern, '<strong class="text-white">`$1`</strong>');
  return parse(highlightedText)
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
  input = input.replace(/(.*)(\n|$)/gm, '<p>$1</p>')

  return input
}