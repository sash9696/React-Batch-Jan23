import axios from 'axios'
import React, { useState } from 'react'
import { url } from '../../resource'
import './AddBooks.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddBooks({ getBooks }) {

    // const [bookDetails, setBookDetails] = useState({
    //     title: "",
    //     author: "",
    //     genre:"",
    //     summary:""
    // })

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [summary, setSummary] = useState('')
    const [genre, setGenre] = useState('')


    const addBook = (evt) => {
        evt.preventDefault()
        //crud

        let formJSON = {
            title: title,
            author: author,
            genre: genre,
            summary: summary
        }

        axios.post(url, formJSON)
            .then(data => {
                console.log(data)
                setTitle("")
                setAuthor("")
                setGenre("")
                setSummary("")

                if (data.status == 201) {
                    toast('Book added successfuly')
                    getBooks()
                }


            })

    }

    return (
        <div className='addBooks'>
            <h2>Add Book</h2>
            <form>
                <label className='addBooks_label'>Title:</label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                <label className='addBooks_label'>Author:</label>
                <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} />
                <label className='addBooks_label'>Genre:</label>
                <input type='text' value={genre} onChange={(e) => setGenre(e.target.value)} />
                <label className='addBooks_label'>Summary:</label>
                <input type='text' value={summary} onChange={(e) => setSummary(e.target.value)} />

                <button type='submit' className='addBooks_button' onClick={addBook} >Add Book</button>
                <ToastContainer toastStyle={{ backgroundColor: 'green', color: 'white' }} />

            </form>
        </div>
    )
}

export default AddBooks