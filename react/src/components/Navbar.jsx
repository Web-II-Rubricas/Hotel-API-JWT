import { useState } from 'react'
import './Navbar.css'

function Navbar() {
const [count, setCount] = useState(0)

return (
    <>  
        <nav className="navbar">
            <ul className="navbar-links">
                <li><a href="/home" className="navbar-link">Inicio</a></li>
                <li><a href="/vista-admin" className="navbar-link">Admin</a></li>
                <li><a href="/vista-usuario" className="navbar-link">Usuario</a></li>
                <li><a href="/" className="navbar-link">Cerrar Sesion</a></li>
            </ul>
        </nav>
    </>
)

}

export default Navbar