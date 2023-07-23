import React from 'react'
import { username } from '../../Services/UserData'

const Text = () => {
  return (
    <div className='welcome'>
            <h2 style={{float:'left'}}>Hello {username}!</h2>
            <h3 style={{float:'right',textDecoration:'underline'}}>Hotels</h3>
            <div style={{clear:'both'}}></div>
    </div>
  )
}

export default Text