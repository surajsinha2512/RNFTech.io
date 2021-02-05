import './App.css';
import React,{useState,useEffect} from 'react';
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
} from 'react-router-dom'; 
import Login from './components/Login/login';
import Signup from './components/SignUp/Signup';
import Home from './components/Home/Home';

function App() {
const [home,setHome]=useState(true);
useEffect(()=>{
  if(window.location.pathname!=="/"){
    setHome(false);
 }
},[home])
const handler=()=>{
  if(window.location.pathname!=="/"){
    setHome(false);
 }
}

  return (
    <div >
   
       <Router> 
           <div className="button"> 
           <div className="divide">
           {home?<>
                <Link to="/home"><button className="btn btn-primary" onClick={handler}>Home</button></Link> 
            
                <Link to="/login"><button className="btn btn-primary" onClick={handler}>Login</button></Link>
            
                <Link to="/Signup"><button className="btn btn-warning" onClick={handler}>Sign Up</button></Link> </>
           :null}
           </div>
            <Switch> 
              <Route exact path='/login' component={Login}></Route> 
              <Route exact path='/Signup' component={Signup}></Route>
              <Route exact path='/home' component={Home}></Route>
            </Switch> 
          </div> 
       </Router> 
      
     
    </div>
  );
}

export default App;
