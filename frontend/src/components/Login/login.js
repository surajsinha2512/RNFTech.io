import React, { useState } from 'react'
import './Login.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

  function Login(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [temp,setTemp]=useState(false);
  const handleOnChange= (e)=> {
   if(e.target.name==="email"){
   setEmail(e.target.value);
   }
  if(e.target.name==="password"){
    setPassword(e.target.value);
  }
}

  const validate =()=> {
    if (!email || !password) {
      window.alert('*Please enter the mandatory fields')        
      return
    }
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
      window.alert('Please enter a valid email')
      return
    }
    return true
  }

  const handleSubmit= ()=> {
  
    console.log(email, password)
    if (validate()) {
      // post Request
      axios.post('http://localhost:9999/login', {
        email,
        password
      })
        .then((response) => {
          console.log(response)
          if (response.status === 200) {
            window.localStorage.setItem('login', JSON.stringify(response.data))
           setTemp(true)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }


    return (<>
   
      { temp ? (<Redirect push to="/home"/>) : null }        
     
      <div id='sign-in' className="outer">
        <div><h1>Sign In</h1></div>
        {/* email */}
        <div className="inner">
        <div className='form-field'>
          <div>Email*:</div>
          <input type='text' name='email' value={email} onChange={handleOnChange} />
        </div>
        {/* password */}
        <div className='form-field'>
          <div>Password*:</div>
          <input type='password' name='password' value={password} onChange={handleOnChange} />
        </div>
        <div className='form-field'>
          <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
        </div>
      </div>
      </>
    )
  }


export default Login;