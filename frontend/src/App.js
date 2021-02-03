import './App.css';
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
    BrowserRouter
} from 'react-router-dom'; 
import Login from './components/login';
import Signup from './components/Signup';

function App() {
  return (
    <div >
       <Router> 
           <div className="button"> 
                <Link to="/"><button className="btn btn-primary">Home</button></Link> 
            
                <Link to="/login"><button className="btn btn-primary">Login</button></Link>
            
                <Link to="/Signup"><button className="btn btn-warning">Sign Up</button></Link> 
           
            <Switch> 
              <Route exact path='/login' component={Login}></Route> 
              <Route exact path='/Signup' component={Signup}></Route> 
            </Switch> 
          </div> 
       </Router> 

     
    </div>
  );
}

export default App;
