import { useState } from 'react'
import './App.css'
import { Heading } from './components/Heading/index'
import { userIcon } from '../src/components/Icons/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-red-900 h-12 w-8'>
      <Heading/>
      <userIcon/> 
      </div>
      
    </>
  )
}

export default App
