import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

import AllRouting from './components/AllRouting';

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Navbar />

        <main className='main_app'>
          <AllRouting />
        </main>
      </div>
    </>
  )
}

export default App
