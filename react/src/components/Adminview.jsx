import { useState } from 'react'
import './Login.css'
import Bookings from './Bookings'
import Rooms from './Rooms'
import Navbar from './Navbar'

function Adminview() {
const [count, setCount] = useState(0)

return (
    <>
    <Navbar/>
    <Bookings/>
    <Rooms/>
    </>
)

}

export default Adminview