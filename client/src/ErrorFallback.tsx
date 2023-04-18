import { faRobot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Header } from './components'

const ErrorFallback = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <div className='flex flex-col items-center justify-center gap-8 text-white section height'>
      <h1 className='text-4xl font-extrabold text-center md:text-6xl'>Something went wrong! <FontAwesomeIcon icon={faRobot} /></h1>
      <div className='flex flex-wrap items-center justify-center h-16 text-2xl'>Return to <Link to={path} className='flex items-center justify-center h-full px-10 ml-2 font-bold transition-colors duration-200 ease-in rounded-md bg-jungle hover:bg-blue'>Previous Page</Link></div>
    </div>
  )
}

export default ErrorFallback
