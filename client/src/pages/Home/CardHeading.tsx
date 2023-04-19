import { FC } from 'react'
import { faAsterisk, faComments, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  index: number
  link: string
  toggleCard: () => void
}

const CardHeading: FC<Props> = ({ index, link, toggleCard }) => {
  return (
    <h2 className='w-full'>
      <button
        onClick={toggleCard}
        className='flex items-center w-full gap-4 p-3'
      >
        <span className='order-2 font-bold text-white text-[1.5rem]'>{link}</span>
        {icons[index]}
      </button>
    </h2>
  )
}

export default CardHeading

const linksClass = 'w-12 aspect-square p-[.75rem] rounded-full bg-[rgba(0,0,0,.65)] flex justify-center items-center text-base'

const icons = [
  <div className={`${linksClass} text-jungle`}><FontAwesomeIcon icon={faComments} className='pointer-events-none' /></div>,
  <div className={`${linksClass} text-blue text-xl`}><FontAwesomeIcon icon={faAsterisk} className='pointer-events-none' /></div>,
  <div className={`${linksClass} text-[#BF4E30] font-extrabold`}><span className='pointer-events-none'>{'{...}'}</span></div>,
  <div className={`${linksClass} text-lightGrey`}><FontAwesomeIcon icon={faUtensils} className='text-lg pointer-events-none' /></div>,
]