import parse from 'html-react-parser'

export function parseHtml(text: string) {
  const pattern = /`([^`]+)`/g;
  const highlightedText = text.replace(pattern, '<strong>`$1`</strong>');
  return parse(highlightedText)
}