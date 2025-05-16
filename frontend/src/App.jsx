import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginPage } from './components/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='m-8'>
  {count > 0?
    <div className="h-screen flex justify-center items-center">
      <h1 className='font-sans text-2xl'>This is the Safe Dashboard that requires to be Authenticated. Keep it in Protected Route</h1>
    </div>:
    <LoginPage/>
  }</div>
    </>
    
  )
}

export default App
