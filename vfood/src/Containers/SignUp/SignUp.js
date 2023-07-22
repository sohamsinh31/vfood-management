import React, { useState } from 'react'
import './styles.css'
import Card from '../../Components/Card/Card'

const SignUp = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");


  return (
    <div>
      <div className='ctext'>
        <h2>Create <br /> Account!</h2>
        <div className='login'>
          <div className='inputs'>
            <Card height={68} >
              <input type='text' className='inputMain' placeholder='Name' onChange={(e) => setUsername(e.target.value)} />
            </Card>
            <br />
            <Card height={68} >
              <input type='text' className='inputMain' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            </Card>
            <br />
            <Card height={68} >
              <input type='text' className='inputMain' placeholder='Password' onChange={(e) => setPass(e.target.value)} />
            </Card>
          </div>
          <div className='btn'>
            <h2 className='sigup'>Sign Up</h2>
            <div className='signin'>
              <h2><a href='./Containers/Login/Login'>Sign In</a></h2>
            </div>
            <button className='submit'>-&gt;</button>
            <div style={{ clear: 'both' }} />
          </div>
        </div>
      </div>


    </div>
  )
}

export default SignUp