import './App.css'
import { Heading } from './components/Heading/index'
import { UserIcon } from '../src/components/Icons/index'
import { Inputs } from '../src/components/Inputs/index'
import { Button } from '../src/components//Button/index'

function App() {

  return (
    <>
    <div className=' bg-white bg-opacity-30 border-spacing-3 border-4 border-b-stone-300 mt-16 py-6 px-8 inline-block justify-center items-center'>
      <form> 
      <Heading/>
      <UserIcon/>
      <Inputs/>
      <Button/>
      </form>
    </div>
    
    </>
  )
}

export default App
