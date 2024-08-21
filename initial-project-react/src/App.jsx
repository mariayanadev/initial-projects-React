import { useState } from 'react'
import './App.css'
import { Heading } from './components/Heading/index'
import { userIcon } from '../src/components/Icons/index'

function App() {

  return (
    <>
    <div className='border-solid border-2 border-indigo-600'>
      <Heading/>
      <userIcon/> 
      </div>
      
    </>
  )
}

export default App
