
import { Route, Routes } from 'react-router-dom'
import { Chat, Home } from './pages'


const App = () => {


  return (
    <main className='m-6'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </main>
  )
}

export default App