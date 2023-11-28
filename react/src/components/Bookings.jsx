import React from "react";
import { useState,useEffect } from 'react';
import axios from "axios";  
import './Login.css'

const Bookings = () => {
  const [reservas, setReservas] = useState([]);
  const [datos, setDatos] = useState({
    codigoH: '',
    nombre: '',
    telefono: '',
    fechadereserva: '',
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

    axios.post('http://localhost:5000/bookings', datos)
      .then(response => {
        setReservas([...reservas, response.data]);
      })
      .catch(error => console.error('Error al crear la reserva', error));
  };

  return (
    <div>
      <h1>Reservas</h1>

      <ul>
        {reservas.map(reserva => (
          <li key={reserva.codigo}>
          {reserva.codigo_habitacion} - {reserva.nombre_cliente} - {reserva.telefono_cliente}  - {reserva.fecha_reservacion} -{reserva.fecha_entrada} - {reserva.fecha_salida}
          </li>
        ))}
      </ul>

      <form onSubmit={handleReservaSubmit}>
      <label>Numero de habitacion:</label>
        <input type="number" name="codigoH" onChange={handleInputChange} />

        <label>Nombre:</label>
        <input type="text" name="nombre" onChange={handleInputChange} />

        <label>Teléfono:</label>
        <input type="number" name="telefono" onChange={handleInputChange} />

        <label>Fecha de reservacion:</label>
        <input type="number" name="fechadereserva" onChange={handleInputChange} />

        <label>Fecha de entrada:</label>
        <input type="number" name="fechaEntrada" onChange={handleInputChange} />

        <label>Fecha de salida:</label>
        <input type="number" name="fechaSalida" onChange={handleInputChange} />

        <button type="submit">Reservar</button>
      </form>
    </div>
  );
};
export default Bookings;
