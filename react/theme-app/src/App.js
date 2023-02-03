import React, { useContext } from 'react'
import './App.css'
import { ThemeContext } from './context/ThemeProvider'

function App() {

  const { toggle, toggleFunction } = useContext(ThemeContext)





  return (
    <div className='app' style={{ backgroundColor: toggle ? 'tomato' : 'grey' }} >
      <div className='section'>
        <h1>Context Api</h1>
        <button onClick={toggleFunction} >Change the theme</button>
      </div>
    </div>
  )
}

export default App