import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface Props {
  currentCard: string
  link: string
  index: number
}

const CardContent: FC<Props> = ({ currentCard, link, index }) => {
  const navigate = useNavigate()
  return (
    <div
      role='region'
      className='w-full p-3 pt-0 pl-16 pr-12'
    >
      <p
        className={`${currentCard === link ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-sm md:text-base transition-all duration-500 delay-200 text-white mb-4 md:mb-10`}
      >
        {descriptions[index]}
      </p>
      <button
        onClick={() => navigate(link.toLocaleLowerCase())}
        disabled={link !== currentCard}
        className={`${currentCard === link ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} px-8 py-3 md:text-lg font-bold ${link === 'Recipe' ? 'text-[#000]' : 'text-white'} rounded-md transition-all duration-500 delay-200 ${LinksColorsMobile[index]} ${LinksColors[index]} ${LinksColorsHover[index]} whitespace-nowrap`}
      >
        {LinksActions[index]}
      </button>
    </div>
  )
}

export default CardContent

const descriptions = [
  'Start chatting with an artificial intelligence (AI) chatbot.',
  'Use an AI to generate a regular expression (Regex) code.',
  'Use an AI to generate mock data for your project by providing the schema format.',
  'Create a unique recipe with the help of AI.'
]

const LinksActions = [
  'Start Chatting',
  'Generate Regex',
  'Mock Data',
  'Create Recipe'
]

const LinksColors = [
  'md:bg-[rgba(15,163,126,.8)]',
  'md:bg-[rgba(15,133,163,.8)]',
  'md:bg-[rgba(191,78,48,.8)]',
  'md:bg-[rgba(240,241,242,.8)]'
]
const LinksColorsMobile = [
  'bg-[rgba(15,163,126,1)]',
  'bg-[rgba(15,133,163,1)]',
  'bg-[rgba(191,78,48,1)]',
  'bg-[rgba(240,241,242,1)]'
]
const LinksColorsHover = [
  'hover:bg-[rgba(15,163,126,1)]',
  'hover:bg-[rgba(15,133,163,1)]',
  'hover:bg-[rgba(191,78,48,1)]',
  'hover:bg-[rgba(240,241,242,1)]'
]