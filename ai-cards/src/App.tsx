import './App.css'
import { Header } from './components/header/index.ts'

function App() {

  return (
    <div className='flex flex-col items-center bg-gray-100'>
      <div className='flex flex-col py-[400px] items-center '>
        <div className='text-[30px] font-medium'>Welcome to Ai Cards</div>
        <div>Please, Sing In for start</div>
        </div>
      <Header />
    </div>
  )
}

export default App
