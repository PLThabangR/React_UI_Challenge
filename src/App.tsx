import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Text from './components/Text/Text'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import Card from './components/card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div>
  <Navbar/>
  <Footer/>
  <Card name="name" image="image" description="description" price={10}/>
    </div>
    
       
       
       
       
       
    </>
  )
}

export default App
