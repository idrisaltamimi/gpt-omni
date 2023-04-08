
import { Link, Route, Routes } from 'react-router-dom'

import { Chat, Home, RegExr } from './pages'
import logo from './assets/logo.png'

const App = () => {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/regexr' element={<RegExr />} />
      </Routes>
    </>
  )
}

export default App