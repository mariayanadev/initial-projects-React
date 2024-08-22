import './App.css'
import { Heading } from './components/Heading/index'
import { UserIcon } from '../src/components/Icons/index'
import { Inputs } from '../src/components/Inputs/index'
import { Button } from '../src/components//Button/index'

function App() {

  return (
    <>
    <div className='border-spacing-3 border-6 border-blue-700 mt-16 py-6 px-8 inline-block justify-center items-center'>
      <Heading/>
      <UserIcon/>
      <Inputs/>
      <Button/>
    </div>
    </>
  )
}

export default App
