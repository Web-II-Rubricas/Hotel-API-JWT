import { useState } from 'react'
import './Login.css'
import Bookings from './Bookings'
import Navbar from './Navbar'

function Usersview() {
const [count, setCount] = useState(0)

return (
    <>  
    <Navbar/>
    <Bookings/>
    </>
)

}

export default Usersview