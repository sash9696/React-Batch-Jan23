import axios from 'axios'
import React from 'react'
import { url } from '../../../resource'
import './Card.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Card({ id, title, author, genre, summary, getBooks }) {

    const deleteBook = () => {
        axios.delete(`${url}/${id}`)
            .then(data => {
                toast('book deleted successfully')
                getBooks()
            })
    }

    const updateBook = () => {

        let formJSON = {
            title: 'abc',
            author: 'abc',
            genre: 'comedy',
            summary: 'this is a summary'
        }
        axios.put(`${url}/${id}`, formJSON).then(data => {

            toast('book edited successfully')
            getBooks()
        })

    }
    return (
        <div className='card'>

            <h4 className='card_title'>{title} </h4>
            <div className='card_description'>
                <p>Author: {author} </p>
                <p>Genre: {genre} </p>
            </div>
            <div className='card_summary'>{summary} </div>
            <div className='card_buttons'>
                <button className='button' onClick={updateBook}>Edit</button>
                <button className='button' onClick={deleteBook}>Delete</button>


            </div>
        </div>
    )
}

export default Card