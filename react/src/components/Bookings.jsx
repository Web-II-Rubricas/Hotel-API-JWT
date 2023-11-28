import React from "react";
import { useState,useEffect } from 'react';
import axios from "axios";  
import './Login.css'; 


const Bookings = () => {
  const [reservas, setReservas] = useState([]);
  const [datos, setDatos] = useState({
    codigoH: '',
    nombre: '',
    telefono: '',
    fechaEntrada: '',
    fechaSalida: '',
  });

  useEffect(() => {
    axios.get('http://localhost:5000/bookings')
      .then(response => setReservas(response.data))
      .catch(error => console.error('Error al obtener las reservas', error));
  }, []);

  const handleInputChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleReservaSubmit = (e) => {
    e.preventDefault();

    // Realiza una solicitud al backend para crear una nueva reserva
    axios.post('http://localhost:5000/bookings', datos)
      .then(response => {
        // Actualiza la lista de reservas después de la creación exitosa
        setReservas([...reservas, response.data]);
      })
      .catch(error => console.error('Error al crear la reserva', error));
  };

  return (
    <div>
      <h1>Reservas</h1>

      {/* Formulario para realizar una nueva reserva */}
      <form onSubmit={handleReservaSubmit}>
      <label>Numero de habitacion:</label>
        <input type="text" name="habitacion" onChange={handleInputChange} />

        <label>Nombre:</label>
        <input type="text" name="nombre" onChange={handleInputChange} />

        <label>Teléfono:</label>
        <input type="text" name="telefono" onChange={handleInputChange} />

        <label>Fecha de entrada:</label>
        <input type="date" name="fechaEntrada" onChange={handleInputChange} />

        <label>Fecha de salida:</label>
        <input type="date" name="fechaSalida" onChange={handleInputChange} />

        <button type="submit">Reservar</button>
      </form>
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
export default Bookings;