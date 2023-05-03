
import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import ErrorBoundary from './ErrorBoundary'
import { LoadingFallback } from './components'


const Header = lazy(() => import('./components/Header'));
const Home = lazy(() => import('./pages/Home/main'))
const ChatBot = lazy(() => import('./pages/ChatBot/main'))
const RegEx = lazy(() => import('./pages/RegEx/main'))
const Json = lazy(() => import('./pages/Json/main'))
const Recipe = lazy(() => import('./pages/Recipe/main'))
const ErrorFallback = lazy(() => import('./components/ErrorFallback'))

const App = () => {
  const fallback = <LoadingFallback />
  const location = useLocation()
  const path = location.pathname

  return (
    <>
      <ErrorBoundary fallback={<Suspense fallback={fallback}><ErrorFallback /></Suspense>}>
        {path !== '/' && <Suspense><Header /></Suspense>}
        <Routes>
          <Route path='/' element={<Suspense fallback={fallback}><Home /></Suspense>} />
          <Route path='/chat' element={<Suspense fallback={fallback}><ChatBot /></Suspense>} />
          <Route path='/regex' element={<Suspense fallback={fallback}><RegEx /></Suspense>} />
          <Route path='/json' element={<Suspense fallback={fallback}><Json /></Suspense>} />
          <Route path='/recipe' element={<Suspense fallback={fallback}><Recipe /></Suspense>} />
          <Route path='*' element={<Suspense fallback={fallback}><ErrorFallback /></Suspense>} />
        </Routes>
      </ErrorBoundary>
    </>
  )
}

export default App