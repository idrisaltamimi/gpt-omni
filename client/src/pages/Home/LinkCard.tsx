import { FC } from 'react'

import { CardHeading, CardContent } from './'

interface Props {
  link: string
  index: number
  currentCard: string
  toggleCard: (value: string) => void
}

const LinkCard: FC<Props> = ({ link, index, currentCard, toggleCard }) => {

  return (
    <div
      className={`overflow-hidden ${currentCard === link ? 'basis-[clamp(15rem,20vh,20rem)] flex-grow bg-charcoal' : 'basis-[calc((12px*2)+48px)] bg-grey'} rounded-[calc(((12px*2)+48px)/2)] transition-all duration-500 hover:bg-charcoal`}
    >
      <CardHeading
        link={link}
        index={index}
        toggleCard={() => toggleCard(link)}
      />

      <CardContent
        currentCard={currentCard}
        link={link}
        index={index}
      />
    </div>
  )
}

export default LinkCard