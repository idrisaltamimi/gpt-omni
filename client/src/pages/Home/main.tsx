import { useState } from 'react'
import { LinkCard } from './'

const Home = () => {
  const [currentCard, setCurrentCard] = useState<string>(localStorage.getItem('card') || 'Chat')

  const toggleCard = (value: string) => {
    setCurrentCard(value)
    localStorage.setItem('card', value)
    if (value === currentCard) {
      localStorage.setItem('card', '')
      setCurrentCard('')
    }
  }

  return (
    <main className='max-w-[50rem] w-full mx-auto px-4 flex flex-col justify-center items-center h-full'>
      <div className='flex flex-col gap-4'>
        {links.map((link, index) => (
          <LinkCard
            key={link}
            link={link}
            index={index}
            currentCard={currentCard}
            toggleCard={toggleCard}
          />
        ))}
      </div>
    </main>
  )
}

export default Home

const links = ['Chat', 'Regex', 'Json', 'Recipe',]