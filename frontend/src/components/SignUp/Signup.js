import React, { useState} from 'react';
import {Redirect} from 'react-router-dom';
import './SignUp.css';
import axios from 'axios';


function Signup(){
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [bio,setBio]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [success,setSuccess]=useState(false);

  const handleOnChange= (e)=> {
    //console.log(e.target.name, e.target.value)
   console.log(e.target.name)
    if(e.target.name==="firstName"){
        setFirstName(e.target.value)
    }
    if(e.target.name==="lastName"){
    setLastName(e.target.value)
    }
    if(e.target.name==="bio"){
    setBio(e.target.value)
    }

    if(e.target.name==="email"){
    setEmail(e.target.value)
    }
    if(e.target.name==="password"){
    setPassword(e.target.value)
    }
  }

 const validate =()=> {
    if (!email || !password ) {
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
    if (validate) {
      // api call
      axios.post('http://localhost:9999/signup', {
       firstName,
       lastName,
       bio,
       email,
       password
      })
        .then(function (response) {
          console.log(response)
          setSuccess(true);
         

        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

    return (
      <>
       { success ? (<Redirect push to="/home"/>) : null }        
      <div id='sign-up'>
        {/* first Name */}
        <div><h1>Sign Up</h1></div>
        <div className="inner">
        <div className='form-field'>
          <div>First Name:</div>
          <input type='text' name='firstName' value={firstName} onChange={handleOnChange} />
        </div>
        {/* last Name */}
        <div className='form-field'>
          <div>Last Name:</div>
          <input type='text' name='lastName' value={lastName} onChange={handleOnChange} />
        </div>
        {/* Bio */}
        <div className='form-field'>
          <div>Bio:</div>
          <input type='text' name='bio' value={bio} onChange={handleOnChange} />
        </div>
        {/* Email */}
        <div className='form-field'>
          <div>Email:</div>
          <input type='text' name='email' value={email} onChange={handleOnChange} />
        </div>
        {/* password */}
        <div className='form-field'>
          <div>Password:</div>
          <input type='password' name='password' value={password} onChange={handleOnChange} />
        </div>
       
        <div className='form-field'>
          <button className="btn btn-danger" onClick={handleSubmit}>Submit</button>
        </div>
        </div>
      </div>
      </>
    )
}


export default Signup