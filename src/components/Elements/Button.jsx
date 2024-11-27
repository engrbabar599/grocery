import React from 'react'

const Button = ({text, className,type, handleClick}) => {
  return (
    <button onClick={handleClick} type={type ? type : ''} className={`rounded-full w-fit bg-btn-gradient hover:bg-gradient-r hover:scale-105  text-white sm:text-lg text-sm font-semibold transition-all ${className}`}>{text}</button>
  )
}

export default Button