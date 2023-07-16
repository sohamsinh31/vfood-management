import React from 'react'
import './styles.css'
import Card from '../../Components/Card/Card'

const SignUp = () => {
  return (
    <div>
      <div className='ctext'>
        <h2>Create <br /> Account!</h2>
        <div className='login'>
          <Card height={68} width={253}>
          Name
          </Card>
          <br />
          <br />
          <Card height={68} width={253}>
            Email
            </Card>
          <br />
          <br />
          <Card height={68} width={253}>
          Phone
          </Card>
          <div className='btn'>
            <h2 className='sigup'>Sign Up</h2>
            <button className='submit'>-&gt;</button>  
          </div>
          <div className='signin'>
            <a href='./Containers/Login/Login'>Sign In</a>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default SignUp