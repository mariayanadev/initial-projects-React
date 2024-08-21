import './App.css'
import { Heading } from './components/Heading/index'
import { UserIcon } from '../src/components/Icons/index'


function App() {

  return (
    <>
    <div className='bg-red-800 flex-col justify-center items-center w-14 h-20'>
      <Heading/>
      <UserIcon/>
<p className='text-orange-600'> Quero saber se isso tá pegando mesmo</p>
    </div>
      
    </>
  )
}

export default App
