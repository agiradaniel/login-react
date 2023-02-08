import {React, useState, useEffect} from 'react';
import '../App.css';
import Axios from 'axios';

const Registration = () => {
 
 const [userNameReg, setuserNameReg] = useState('');
 const [passwordReg, setpasswordReg] = useState('');

 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

 const [loginStatus, setloginStatus] = useState('');

 Axios.defaults.withCredentials = true;

 const register = () => {
  Axios.post('http://localhost:3001/register',{
    username: userNameReg,
    password: passwordReg,
  }).then((response) => {
    console.log(response)
  })
  }
  
  const login = () => {
    Axios.post('http://localhost:3001/login',{
      username: username,
      password: password,
      headers: {
        'Content-Type': 'application/json',
    }
    }).then((response) => {
      if(response.data.message){
        setloginStatus(response.data.message)
      }else{
        setloginStatus(response.data[0].username + " is logged in")
      }
      console.log(response)
    })
    }

    useEffect(() => {
      Axios.get("http://localhost:3001/login").then((response) => {
        if (response.data.loggedIn ===  true) {
          setloginStatus(response.data.user[0].username);
        }
      });
    }, []);
    
 
  return (
    <div className="App">

      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text" onChange={(e)=>{
          setuserNameReg(e.target.value);
        }}/>
        <label>Password</label>
        <input type="password" onChange={(e)=>{
          setpasswordReg(e.target.value);
        }}/>
        <button onClick={register}>Register</button>
      </div>

      <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="Username ..." onChange={(e)=>{
          setUsername(e.target.value);
        }}/>
        <input type="password" placeholder='Password'  onChange={(e)=>{
          setPassword(e.target.value);
        }}/>
        <button onClick={login}>Login</button>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
}

export default Registration;