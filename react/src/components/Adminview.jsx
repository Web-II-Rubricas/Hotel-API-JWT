import { useState } from 'react'
import './App.css'
import Bookings from './Bookings'
import Rooms from './Rooms'

function App() {
const [count, setCount] = useState(0)

return (
    <>  
    <Bookings/>
    <Rooms/>
    </>
)

}

export default App