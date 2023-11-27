import { useState } from 'react'
import './Navbar.css'
import Navbar from './Navbar'

function Home() {
const [count, setCount] = useState(0)

return (
    <>  
    <Navbar/>
        <div>
        <h1>Bienvenido</h1>
      </div>
    </>
)

}

export default Home