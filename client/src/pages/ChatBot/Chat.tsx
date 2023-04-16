import { faFingerprint, faRobot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

import { AiResponse } from '.'
import { Response } from '../../types'

interface Props {
  chat: Response[] | []
}

const Chat: FC<Props> = ({ chat }) => {
  return (
    <>
      {chat.length > 0 && (
        chat.map(el => (
          <div
            key={crypto.randomUUID()}
            className={`${el.isBot && 'bg-charcoal'} text-white py-6`}
          >
            <div className='max-w-[1000px] mx-auto flex items-baseline gap-4 margin'>
              {el.isBot ? (
                <>
                  <span className='flex items-center justify-center w-8 rounded-full aspect-square bg-jungle'>
                    <FontAwesomeIcon icon={faRobot} />
                  </span>
                  <AiResponse text={el.text} />
                </>
              ) : (
                <>
                  <span className='flex items-center justify-center w-8 rounded-full aspect-square bg-blue'>
                    <FontAwesomeIcon icon={faFingerprint} />
                  </span>
                  {el.text}
                </>
              )}
            </div>
          </div>
        ))
      )}
    </>
  )
}

export default Chat
