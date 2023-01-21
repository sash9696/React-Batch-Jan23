import React, { useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter'


//3 phases
//1. component  create or component mounts
//2. component updates
//3. component is deleted or unmount

function App() {

  const [showCounter, setShowCounter] = useState(false)

  return (
    <div className='app'>
      {showCounter && (<div>
        <Counter />
      </div>)}

      <div style={{ marginTop: 400 }}>
        <button onClick={() => setShowCounter(true)} >Mount Counter</button>
        <button
          onClick={() => setShowCounter(false)}
        >Unmount </button>

      </div>

    </div>
  )
}

export default App