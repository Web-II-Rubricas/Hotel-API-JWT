import React from "react";
import { useState,useEffect } from 'react';
import axios from "axios";  
import './Login.css'; 

const BookingsTable = () => {
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        // Realiza una solicitud al backend para obtener la lista de reservas
        axios.get('http://localhost:5000/bookings')
          .then(response => setReservas(response.data))
          .catch(error => console.error('Error al obtener las reservas', error));
      }, []);

  return (
    <div>
      <h1>Lista Reservas</h1>
      <ul>
        {reservas.map(reserva => (
          <li key={reserva.codigo}>
            {reserva.codigo_habitacion} - {reserva.nombre_cliente} - {reserva.telefono_cliente} -{reserva.fecha_entrada} - {reserva.fecha_salida}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BookingsTable;