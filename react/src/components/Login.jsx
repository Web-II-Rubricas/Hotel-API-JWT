import React from "react";
import { useState } from 'react';
import axios from "axios";  
import './Login.css'; 

const Login = () => {
  const [datos, setDatos] = useState({
    users:"",
    Contraseña:""
  })

  const handleInputChange = (e) =>{
    const { name, value } = e.target;
    setDatos ({...datos, [name]: value});
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(!e.target.checkValidity()){
      console.log("no enviar")
    } else {
      const res = await axios.post("http://localhost:3001/api/users/login",datos)
      console.log(res.data)
    }

  }
    return (
        <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="usuario"
            onChange={handleInputChange}
            value={datos.users}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="clave"
            onChange={handleInputChange}
            value={datos.Contraseña}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    )
}    
       
export default Login;