
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ChatBot, Home, Json, Math, RegEx } from './pages'

const App = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <>
      {path !== '/' && <header className='flex items-center h-16 shadow-sm'>
        <div className='section'>
          <Link
            to={'/'}
            className='flex items-center justify-center w-32 h-10 gap-2 text-base text-white rounded-md bg-jungle hover:bg-[#18ac87] transition-colors duration-200 ease-in'
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Go Back
          </Link>
        </div>
      </header>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<ChatBot />} />
        <Route path='/regex' element={<RegEx />} />
        <Route path='/json' element={<Json />} />
        <Route path='/math' element={<Math />} />
      </Routes>
    </>
  )
}

export default App