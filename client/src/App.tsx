
import { Route, Routes, useLocation } from 'react-router-dom'

import { ChatBot, Home, Json, Recipe, RegEx } from './pages'
import { Header } from './components'
import ErrorBoundary from './ErrorBoundary'
import ErrorFallback from './ErrorFallback'

const App = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <>
      {path !== '/' && <Header />}
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<ChatBot />} />
          <Route path='/regex' element={<RegEx />} />
          <Route path='/json' element={<Json />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='*' element={<ErrorFallback />} />
        </Routes>
      </ErrorBoundary>
    </>
  )
}

export default App