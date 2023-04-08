
import { Link, Route, Routes } from 'react-router-dom'

import { Chat, Home, RegExr } from './pages'
import logo from './assets/logo.png'

const App = () => {


  return (
    <>
      <header>
        <Link to='/'>
          <img src={logo} alt="" width={100} />
        </Link>
      </header>
      <main className='m-6'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/regexr' element={<RegExr />} />
        </Routes>
      </main>
    </>
  )
}

export default App