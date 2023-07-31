import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './componet/Nav'
import Hero from './componet/Hero'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav></Nav>
    <Hero></Hero>
    </>
  )
}

export default App
