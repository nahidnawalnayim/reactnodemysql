import React,{useState} from 'react';
import './App.css';
import Axios from 'axios'

function App() {
  const [usernamereg,setusername]=useState('') 
  const [passwordreg,setpassword]=useState('');

  const register=()=>{
    Axios.post('http://localhost:3007/register',{
      name: usernamereg,
      password: passwordreg
    }).then(res=>{
      console.log(res)
    })  
  }
  return (
    <div className="App">
     <div clasName="registration">
      
       <input placeholder="Enter name" name="name" onChange={(e)=>{
         setusername(e.target.value)
       }}/>
       <br/>
     <input placeholder="Enter password" name="password" onChange={(e)=>{
       setpassword(e.target.value)
     }}/>
     <button onClick={register}>register</button>
     </div>
    </div>
  );
}

export default App;
