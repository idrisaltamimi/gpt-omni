import { FC } from 'react'
import { faRobot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Loader } from '../../components'

interface Props {
  isLoading: boolean
  error: boolean
}

const ChatLoading: FC<Props> = ({ isLoading, error }) => {
  return (
    <div className='w-full bg-charcoal'>
      {isLoading && (
        <div className='max-w-[1000px] mx-auto flex items-baseline gap-4 margin text-white py-6'>
          <Loader />
        </div>
      )}
      {error && (
        <div className='max-w-[1000px] mx-auto flex items-baseline gap-4 margin text-white py-6'>
          <span className='flex items-center justify-center w-8 rounded-full aspect-square bg-jungle'>
            <FontAwesomeIcon icon={faRobot} />
          </span>
          Something went wrong, try again later
        </div>
      )}
    </div>
  )
}

export default ChatLoading
