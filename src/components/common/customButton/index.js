import React from 'react'
import './button.css'
const CustomButton = ({ label,onClick }) => {

  return (
    <button className='customButton' onClick={onClick}>
      <span>{label}</span>
    </button>
  )
}

export default CustomButton