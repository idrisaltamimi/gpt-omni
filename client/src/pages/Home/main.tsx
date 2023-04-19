import { useState } from 'react'
import { LinkCard } from './'

const Home = () => {
  const [currentCard, setCurrentCard] = useState<string>('Chat')

  const toggleCard = (value: string) => {
    setCurrentCard(value)
    if (value === currentCard) {
      setCurrentCard('')
    }
  }

  return (
    <main className='max-w-[50rem] w-full mx-auto px-4 flex flex-col justify-center items-center h-full'>
      <h1 className='mb-6 text-4xl font-bold text-white md:text-6xl'>GPT-OMNI</h1>
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