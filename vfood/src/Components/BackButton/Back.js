import React from 'react'
import "./styles.css"

const Back = ({ onClick = null }) => {
  return (
    <div>
      <img src='Assets/BackButton.png' onClick={onClick ? () => onClick() : null} alt='' className='backbtn' />
    </div>
  )
}

export default Back
