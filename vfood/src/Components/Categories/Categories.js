import React from 'react'
import "./styles.css"

const Categories = ({imgurl,text}) => {
  return (
    <div className='catediv'>
      <img className='lower' src='Assets/mainback2.png' />
      <img className='upper' src='Assets/pizza3.png' />
      <p className='catetext'>PIZZA</p>
    </div>
  )
}

export default Categories
