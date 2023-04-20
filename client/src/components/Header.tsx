import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className='relative z-50 flex items-center h-16 shadow-sm'>
      <div className='section'>
        <button
          onClick={() => navigate(-1)}
          className='flex items-center justify-center w-32 h-10 gap-2 text-base text-white rounded-md bg-jungle hover:bg-[#18ac87] transition-colors duration-200 ease-in'
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Go Back
        </button>
      </div>
    </header>
  )
}

export default Header
