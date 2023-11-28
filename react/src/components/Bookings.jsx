import React from "react";
import { useState,useEffect } from 'react';
import axios from "axios";  
import './Login.css'

const Bookings = () => {
  const [reservas, setReservas] = useState([]);
  const [datos, setDatos] = useState({
    codigo_habitacion: "",
    nombre_cliente: "",
    telefono_cliente: "",
    fecha_reservacion: "",
    fecha_entrada: "",
    fecha_salida: "",
  });

  useEffect(() => {
    axios.get('http://localhost:5000/bookings')
      .then(response => setReservas(response.data))
      .catch(error => console.error('Error al obtener las reservas', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatos ({...datos, [name]: value});
  };

  const handleReservaSubmit = async (e) => {
    e.preventDefault();
    if(!e.target.checkValidity()){
      console.log("no enviar")
    } else {
  const res= await axios.post('http://localhost:5000/bookings', datos)
      .then((res) => {
        // console.log(res.data)
        // setReservas([...reservas, response.data]);
      })
      .catch(error => console.error('Error al crear la reserva', error));
    }
  };
  const handleUpdate = async(e) =>{
    e.preventDefault();
    if(!e.target.checkValidity()){
      console.log("no enviar")
    } else {
      const res = await axios.patch(`http://localhost:5000/bookings/${datos.codigo}`,datos)
    .then((res) => {
    console.log(res.data)
    })
    .catch((error) => {
    console.log('Credenciales incorrectas: ' + error.Rooms);
    });
    }
  }

  const handleDelete = async () => {
    try { 
      const res = await axios.delete(`http://localhost:5000/bookings/${datos.id}`);
      console.log('Deleted:', res.data);
    } catch (error) {
      console.log('Error deleting:', error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Reservas</h1>

      <form onSubmit={handleReservaSubmit}>
      {/* <label>Codigo D:</label>
        <input type="number" name="codigo" id="codigo" value={datos.codigo} onChange={handleInputChange} /> */}

      <label>Numero de habitacion:</label>
        <input type="number" name="codigo_habitacion" id="codigo_habitacion" value={datos.codigo_habitacion} onChange={handleInputChange} />

        <label>Nombre:</label>
        <input type="text" name="nombre_cliente" id="nombre_cliente" value={datos.nonombre_cliente} onChange={handleInputChange} />

        <label>Teléfono:</label>
        <input type="number" name="telefono_cliente" id="telefono_cliente" value={datos.telefono_cliente} onChange={handleInputChange} />

        <label>Fecha de reservacion:</label>
        <input type="number" name="fecha_reservacion" id="fecha_reservacion" value={datos.fecha_reservacion} onChange={handleInputChange} />

        <label>Fecha de entrada:</label>
        <input type="number" name="fecha_entrada" id="fecha_entrada" value={datos.fecha_entrada} onChange={handleInputChange} />

        <label>Fecha de salida:</label>
        <input type="number" name="fecha_salida" id="fecha_salida" value={datos.fecha_salida} onChange={handleInputChange} />

        <button type="submit">Reservar</button>
      </form>
        {/* <button onClick={handleUpdate} className="update-button">Actualizar</button>
        <button onClick={handleDelete} className="delete-button">Eliminar</button> */}
      <ul>
        {reservas.map(reserva => (
          <li key={reserva.codigo}>
              {/* {reserva.codigo} */}
               - {reserva.codigo_habitacion} - {reserva.nombre_cliente} - {reserva.telefono_cliente}  -
              {reserva.fecha_reservacion} -{reserva.fecha_entrada} - {reserva.fecha_salida}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Bookings;
