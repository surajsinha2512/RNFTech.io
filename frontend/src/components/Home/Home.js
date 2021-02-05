import React, { useState,useEffect } from 'react'
import './Home.css';
import axios from 'axios';
import Cards from '../card/card';
  function Home(){
    const [loading,setLoading]=useState(false);
   const [user,setUser]=useState([]);
   let val=[];

   const handler=async ()=>{
    axios.get('http://localhost:9999/home')
    .then((response) => {
      setLoading(true)
      response.data.map((l)=>{
        console.log(l.fName)
       
        val.push(l);
        setUser([...val]);
        setLoading(false);
      })
    })
    .catch((error) => {
      console.log(error)
    })
 



   }
  useEffect(()=>{
      // get Request for all the user available in the databases 
    
    handler()
    
  },[])
  

    return (
      <div>
      <div>
       
      </div>
        {loading?<h1>Loading</h1>:user.map((data,index)=>{
          return(
              <>
              <div className="list" key={index}>
              <Cards firstName={data.fName} lastName={data.lName}/>
              </div>
              </>
          )
        })}
      </div>
    )
  }


export default Home;