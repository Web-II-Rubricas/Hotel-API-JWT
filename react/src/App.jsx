import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Rooms from "./components/Rooms";
import Bookings from "./components/Bookings";
import Adminview from "./components/Adminview";
import Usersview from "./components/Usersview";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            {/* <Route path="/habitaciones" element={ <Rooms/> }></Route>
        <Route path="/reservas" element={ <Bookings/> }></Route> */}
            <Route path="/vista-admin" element={<Adminview />}></Route>
            <Route path="/vista-usuario" element={<Usersview />}></Route>
            {/* <Route path="/navbar" element={ <Navbar/> }></Route> */}
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
