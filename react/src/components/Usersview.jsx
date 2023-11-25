import { useState } from 'react'
import './App.css'
import Bookings from './Bookings'

function App() {
const [count, setCount] = useState(0)

return (
    <>  
    <Bookings/>
    </>
)

}

export default App