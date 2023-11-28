import React from "react";
import { useState } from 'react';
import axios from "axios";  
import './Login.css'; 
import { useNavigate } from "react-router-dom";
import {useUser} from '../Context/UserContext.jsx'


const Login = () => {
  const [datos, setDatos] = useState({
      name:"",
      Contraseña:""
    })

  const {setUser,setRol} = useUser();

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

  const navigate = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(!e.target.checkValidity()){
      console.log("no enviar")
    } else {
      const res = await axios.post('http://localhost:5000/api/users/login',datos)

    .then((res) => {
    const username = res.data.users.name
    setUser(username)
    const roles = res.data.users.rol
    setRol(roles)
    
    navigate('/home')
    console.log(res.data)
    })
    .catch((error) => {
    console.log('Credenciales incorrectas: ' + error.Login);
    });
    }
  }

    return (
        <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <div className="input-group">
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
        </div>
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