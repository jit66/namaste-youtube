import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
         <img
          className="h-6"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Eo_circle_deep-orange_white_letter-j.svg/2048px-Eo_circle_deep-orange_white_letter-j.svg.png"
          alt="user"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage