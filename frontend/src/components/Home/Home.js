import React, { useState,useEffect } from 'react'
import './Home.css';
import axios from 'axios';

  function Home(){

  useEffect(()=>{
    
    
      // get Request for all the user available in the databases
      setTimeout(()=>{
        axios.get('http://localhost:9999/home')
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
      },1000)
   
    
  })


    return (
      <div>
    
      </div>
    )
  }


export default Home;