import React, { useState } from 'react'
import './styles.css'
import Card from '../../Components/Card/Card'
import { postData } from '../../Services/SignUp';

const SignUp = () => {

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [address, setAddr] = useState("");

  const jsonData = {
    "Name": email.split("@")[0],
    "Email": email,
    "Password": pass,
    "PhoneNo": phone,
    "Address": address
  }

  const doSubmit = () => {
    if (email != "" && pass != "" && phone != "") {
      postData(jsonData).then((res) => {
        if (res) {
          if (res[0].Email == email) {
            window.location.href = "/login"
          }
        }
      });
    }
  }


  return (
    <div>
      <div className='ctext'>
        <h2>Create <br /> Account!</h2>
        <div className='login'>
          <div className='inputs'>
            <Card height={68} >
              <input type='text' className='inputMain' placeholder='PhoneNumber' onChange={(e) => setPhone(e.target.value)} />
            </Card>
            <br />
            <Card height={68} >
              <input type='text' className='inputMain' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            </Card>
            <br />
            <Card height={68} >
              <input type='text' className='inputMain' placeholder='Password' onChange={(e) => setPass(e.target.value)} />
            </Card>
            <br />
            <Card height={68} >
              <input type='text' className='inputMain' placeholder='Address' onChange={(e) => setAddr(e.target.value)} />
            </Card>
          </div>
          <div className='btn'>
            <h2 className='sigup'>Sign Up</h2>
            <div className='signin'>
              <h2><a href='./Containers/Login/Login'>Sign In</a></h2>
            </div>
            <button className='submit' onClick={doSubmit}>-&gt;</button>
            <div style={{ clear: 'both' }} />
          </div>
        </div>
      </div>


    </div>
  )
}

export default SignUp