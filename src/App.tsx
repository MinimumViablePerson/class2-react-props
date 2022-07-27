import { useState } from 'react'
import './App.css'

import { Count } from './components/Count'
import { Info } from './components/Info'
import { Menu } from './components/Menu'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Count count={count} />
      <Menu setCount={setCount} count={count} />
      <Info count={count} />
    </div>
  )
}

export default App
