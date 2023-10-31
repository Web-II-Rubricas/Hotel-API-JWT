import React from "react";
import { useState } from 'react';
import axios from "axios";  
import './Login.css'; 

const Login = () => {
  const [datos, setDatos] = useState({
      users:"",
      Contraseña:""
    })

  // const [serverStatus, setServerStatus] = useState(''); // Estado para almacenar el estado del servidor

  // const checkServerStatus = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3001/api/users'); // Reemplaza con la URL correcta
  //     if (response.status === 200) {
  //       setServerStatus('El servidor está en línea.');
  //     }
  //   } catch (error) {
  //     setServerStatus('Error al conectar al servidor. Verifica la URL o la disponibilidad del servidor.');
  //   }
  // };

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
    console.error("Error en la solicitud:", error);
    });
    }
  }

    return (
        <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            id="name"
            name="users"
            onChange={handleInputChange}
            value={datos.users}
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

  // return (
  //   <div>
  //     <button onClick={checkServerStatus}>Verificar conexión al servidor</button>
  //     <div>{serverStatus}</div>
  //   </div>
  // );
  
  }
      
export default Login;