import React, { useState } from 'react'
import './styles.css'
import Card from '../../Components/Card/Card'
import { postData } from '../../Services/SignIn';
import { Token } from '../../Services/Constant';
import { FcNext } from "react-icons/fc";
import { IconContext } from 'react-icons';

const Login = () => {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const jsonData = {
    "email": email,
    "password": pass
  }

  const doSubmit = () => {
    if (email != "" && pass != "") {
      postData(jsonData).then((res) => {
        if (res) {
          if (res[0].Email == email) {
            localStorage.setItem("username" + Token, res[0].Name)
            localStorage.setItem("useremail" + Token, res[0].Email)
            localStorage.setItem("userid" + Token, res[0].UserID)
            window.location.href = "/"
          }
        }
      });
    }
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <h2 className='wtext'>Welcome <br /> Back!</h2>
      <div className='loginMain'>
        <Card height={68} >
          <input type='text' className='inputMain' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        </Card>
        <br />
        <Card height={68} >
          <input type='text' className='inputMain' placeholder='Password' onChange={(e) => setPass(e.target.value)} />
        </Card>
      </div>
      <div className='outer'>
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
          <h2 className='siginLink'>Sign in</h2>
          <button className='submitLogin' onClick={doSubmit}><FcNext color='white'/></button>
          <div style={{ clear: 'both' }} />
        </IconContext.Provider>
      </div>
      <div className='outer2'>
        <h2 className='signup'>Sign up</h2>
        <h4 className='forgot'>Forgot Password</h4>
      </div>
    </div>
  )
}

export default Login
