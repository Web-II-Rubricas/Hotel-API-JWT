import { useState } from 'react'
import './Login.css'
import Bookings from './Bookings'
import Rooms from './Rooms'
import Navbar from './Navbar'
import BookingsTable from "./BookingsTable.jsx"

function Adminview() {
const [count, setCount] = useState(0)

return (
    <>
    <Navbar/>
    <Bookings/>
    <Rooms/>
    
    <BookingsTable/>
    </>
)

}

export default Adminview