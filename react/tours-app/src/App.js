import React, { useEffect, useState } from 'react'
import './App.css'
import Tours from './components/Tours/Tours'


const url = 'https://course-api.com/react-tours-project'



function App() {

  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  console.log(tours)

  useEffect(() => {
    getTours()
  }, [])

  async function getTours() {
    setLoading(true)
    const resp = await fetch(url)
    setTours((await resp.json()))
    setLoading(false)
  }

  if (loading) {
    return (
      <h1 style={{ textAlign: 'center' }} >Loading...</h1>
    )
  }

  if (tours.length == 0) {
    return (
      <div className='title'>
        <h2>No tours Left</h2>
        <button className='btn'
          onClick={() => getTours()}
        >refresh</button>
      </div>
    )
  }



  return (
    <div className='app'>
      <Tours tours={tours} removeTour={removeTour} />

    </div>
  )
}

export default App