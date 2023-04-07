import { useState } from 'react'
import { Link } from 'react-router-dom'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => setIsHovered(true)
  const handleUnhover = () => setIsHovered(false)

  return (
    <>
      {links.map(link => (
        <Link
          key={link}
          to={`/${link}`}
          className='flex flex-col items-center justify-center gap-2 text-2xl text-white uppercase bg-blue-500 w-28 aspect-square'
          onMouseEnter={handleHover}
          onMouseOut={handleUnhover}
        >
          <FontAwesomeIcon icon={faComments} className='pointer-events-none' beat={isHovered} />
          {link}
        </Link>
      ))}
    </>
  )
}

export default Home

const links = ['chat']