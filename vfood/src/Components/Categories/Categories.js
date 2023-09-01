import React from 'react'
import "./styles.css"

const Categories = ({imgurl,text}) => {
  return (
    <div className='catediv'>
      <img className='lower' src='Assets/mainback2.png' />
      <img className='upper' src={imgurl} />
      <p className='catetext'>{text}</p>
    </div>
  )
}

export default Categories
