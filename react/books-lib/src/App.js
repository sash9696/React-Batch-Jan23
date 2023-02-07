import React, { useEffect, useState } from 'react'
import './App.css'
import { url } from './resource'
import axios from 'axios'
import Nav from './components/Nav/Nav'
import List from './components/List/List'
import AddBooks from './components/AddBooks/AddBooks'

//axios vs fetch
//crud
//create => post
//read => get
//update => put
//delete => delete

//syntax is easier
//axios converts data directly into json
//you can also cancel the request using axios
//axios has a wider range of browser supports



function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks()
  }, [])

  const getBooks = async () => {
    try {
      const data = await axios.get(url)
      setBooks(data.data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='app'>
      <Nav />
      <div className='app_body'>
        <List getBooks={getBooks} books={books} />
        <AddBooks getBooks={getBooks} />
      </div>
    </div>
  )
}

export default App