import React from 'react'
import "./styles.css"

const Categories = ({imgurl,text}) => {
  return (
    <div className='catediv'>
      <img className='lower' src={require(`../../Assets/mainback2.png`).default} />
      <img className='upper' src={imgurl} />
      <p className='catetext'>{text}</p>
    </div>
  )
}

export default Categories
