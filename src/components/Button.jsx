import React from 'react'

const Button = ({color, bgColor , size, title, borderRadius }) => {
  return (
    <button 
    type='button'
    className={`text-${size} p-3 hover:bg-light-gray rounded-xl`}
    style={{ color, backgroundColor: bgColor,  borderRadius}}
    
    >
      
      {title}
    
    </button>
  )
}

export default Button