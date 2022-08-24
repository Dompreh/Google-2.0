import React from 'react'

function Avatar({url,className}) {
  return (
    <img 
    loading='lazy' src={url} alt='profile pic' className={`h-10 animate-bounce  w-10 rounded-full object-cover cursor-pointer transition duration-350 transform hover:scale-110 ${className}`}/>
  )
}

export default Avatar