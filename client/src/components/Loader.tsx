import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Loader = () => {
  return (
    <FontAwesomeIcon icon={faSpinner} className='text-white animate-spin' />
  )
}

export default Loader
