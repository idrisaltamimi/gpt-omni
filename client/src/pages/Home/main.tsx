import { Link } from 'react-router-dom'
import { faAsterisk, faCalculator, faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {

  return (
    <main className='section'>
      <div className='flex flex-wrap justify-center'>
        {links.map(link => (
          <Link
            key={link.name}
            to={`/${link.name.toLocaleLowerCase()}`}
            className='flex max-w-[600px] aspect-square w-full items-center justify-center gap-2 text-2xl text-white transition-all duration-300 rounded-lg bg-charcoal h-28 hover:bg-jungle'
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Home

const links = [
  { name: 'Chat', icon: <FontAwesomeIcon icon={faComments} className='pointer-events-none' /> },
  { name: 'RegEx', icon: <FontAwesomeIcon icon={faAsterisk} className='pointer-events-none' /> },
  { name: 'json', icon: <span className='pointer-events-none'>{'{...}'}</span> },
  { name: 'recipe', icon: <FontAwesomeIcon icon={faCalculator} className='pointer-events-none' /> },
]