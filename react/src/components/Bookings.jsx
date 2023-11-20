import React from "react";
import { useState } from 'react';
import axios from "axios";  
import './Login.css'; 

const Bookings = () => {
  const [datos, setDatos] = useState({
      name:"",
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
      const res = await axios.post('http://localhost:3001/api/users/login',datos)

    .then((res) => {
    console.log(res.data)
    })
    .catch((error) => {
    console.log('Credenciales incorrectas: ' + error.Login);
    // console.error("Error en la solicitud:", error);
    });
    }
  }

    return (
        <div className="login-container">
        <h1>Bookings</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={datos.name}
          />
          <input
            type="password"
            placeholder="Password"
            id="Contraseña"
            name="Contraseña"
            onChange={handleInputChange}
            value={datos.Contraseña}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  
  }
      
 export default Bookings;