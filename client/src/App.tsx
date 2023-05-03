
import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import ErrorBoundary from './ErrorBoundary'
import { LoadingFallback } from './components'

const Header = lazyImport('./components', 'Header')
const Home = lazyImport('./pages', 'Home')
const ChatBot = lazyImport('./pages', 'ChatBot')
const RegEx = lazyImport('./pages', 'RegEx')
const Json = lazyImport('./pages', 'Json')
const Recipe = lazyImport('./pages', 'Recipe')
const ErrorFallback = lazyImport('./components', 'ErrorFallback')

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

function lazyImport(moduleName: string, exportedName: string) {
  return lazy(() =>
    import(moduleName).then((module) => ({
      default: module[exportedName],
    }))
  )
}