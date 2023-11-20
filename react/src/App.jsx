import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Bookings from './components/Bookings'
import Rooms from './components/Rooms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Login/>
      <Bookings/>
      <Rooms/>
    </>
  )
  
}

export default App
