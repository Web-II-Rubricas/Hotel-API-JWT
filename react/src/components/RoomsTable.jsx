import React from "react";
import { useState,useEffect } from 'react';
import axios from "axios";  
import './Rooms.css'; 

const RoomsTable = () => {
    const [habitaciones, setHabitaciones] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/rooms')
          .then(response => setHabitaciones(response.data))
          .catch(error => console.error('Error al obtener las habitaciones', error));
      }, []);

  return (
    <div>
      <h1>Lista Habitaciones</h1>
      <ul>
        {habitaciones.map(habitacion => (
          <li key={habitacion.id}>
            {habitacion.numero} - {habitacion.tipo} - {habitacion.valor}
          </li>
        ))}
      </ul>
    </div>
  );
};
      
 export default RoomsTable;