import React, { useState,useEffect } from 'react'
import './Home.css';
import axios from 'axios';

  function Home(){
   const [user,setUser]=useState([]);
   let val=[];

   const handler=async ()=>{
    axios.get('http://localhost:9999/home')
    .then((response) => {
      console.log(response.data)
      response.data.forEach((l)=>{
        setUser([...user,l.fName]);
      })
    })
    .catch((error) => {
      console.log(error)
    })
 

console.log(user)

   }
  useEffect(()=>{
      // get Request for all the user available in the databases 
    handler()
  },[])


    return (
      <div>
      <div>
          show some data atleast 
      </div>
        {user.map((data)=>{
          return(
              <>
              <div>{data} </div>
              </>
          )
        })}
      </div>
    )
  }


export default Home;