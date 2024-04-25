import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Body from './components/body'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='container'>
      <Header />
      <Body />
      <Card />
   </div> 
    
  )
}

export default App
