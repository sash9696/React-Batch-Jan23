import React, { useEffect, useState } from 'react'
import './App.css'
import useFetchData from './customHooks/useFetchData'

function App() {

  //List down a box with all of the users and its details like,
  //name, email, phone ,address
  //use custom hook
  //create a search user functionality as well

  const [userData] = useFetchData('https://jsonplaceholder.typicode.com/users')

  const [dogData] = useFetchData('https://dog.ceo/api/breeds/image/random')


  //custom hooks



  //https://jsonplaceholder.typicode.com/users

  // fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(data => console.log(data))





  //https://dog.ceo/api/breeds/image/random




  return (
    <div className='app'>
      <h1>{userData[0]?.name}</h1>
      <p>{userData[0]?.email}</p>
      <img src={dogData?.message} />

    </div>
  )
}

export default App