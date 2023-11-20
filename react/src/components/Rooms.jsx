import React from "react";
import { useState } from 'react';
import axios from "axios";  
import './Rooms.css'; 

const Rooms = () => {
  const [datos, setDatos] = useState({
      numero:"",
      tipo:"",
      valor:""
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
    console.log('Credenciales incorrectas: ' + error.Rooms);
    });
    }
  }

  const handleUpdate = async () => {
    try {
      const res = await axios.patch('http://localhost:3001/api/rooms/:id', datos); // Replace :id with the actual room ID
      console.log('Updated:', res.data);
    } catch (error) {
      console.log('Error updating:', error.response.data.message);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete('http://localhost:3001/api/rooms/:id'); // Replace :id with the actual room ID
      console.log('Deleted:', res.data);
    } catch (error) {
      console.log('Error deleting:', error.response.data.message);
    }
  };

    return (
        <div className="rooms-container">
        <h1>Rooms</h1>
        <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Numero habitacion"
            id="numero"
            name="numero"
            onChange={handleInputChange}
            value={datos.numero}
          />
          <input
            type="text"
            placeholder="Tipo"
            id="tipo"
            name="tipo"
            onChange={handleInputChange}
            value={datos.tipo}
          />
          <input
            type="text"
            placeholder="Valor"
            id="valor"
            name="valor"
            onChange={handleInputChange}
            value={datos.valor}
          />
        </div>
          <button type="submit">crear</button>
          <button onClick={handleUpdate} className="update-button">Actualizar</button>
          <button onClick={handleDelete} className="delete-button">Eliminar</button>
        </form>

      <table className="room-table">
        <thead>
          <tr>
            <th>Numero</th>
            <th>Tipo</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Suite</td>
            <td>$100</td>
          </tr>
        </tbody>
      </table>

      </div>
    )
  
  }
      
 export default Rooms;