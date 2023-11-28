import { useState, useEffect } from 'react'
import './Navbar.css'
import {useUser} from '../Context/UserContext'
// import login from './Login.jsx'

function Navbar() {
const [count, setCount] = useState(0)
// const {roles,username}= useUser()

// const {userData}= useUser()
// const { username, roles } = userData;

return (
    <>  
        <nav className="navbar" >
            <ul className="navbar-links">
                <li><a href="/home" className="navbar-link">Inicio</a></li>
                <li><a href="/vista-admin" className="navbar-link">Admin</a></li>
                <li><a href="/vista-usuario" className="navbar-link">Usuario</a></li>
                <li><a href="/" className="navbar-link">Cerrar Sesion</a></li>            
            </ul>
            {/* <a >Nombre: {username}  -  Rol: {roles}</a> */}

        </nav>
    </>
)
}

export default Navbar