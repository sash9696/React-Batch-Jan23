import React from 'react'
import './Card.css'

function Card({ id, title, author, genre, summary, getBooks }) {
    return (
        <div className='card'>

            <h4 className='card_title'>{title} </h4>
            <div className='card_description'>
                <p>Author: {author} </p>
                <p>Gnere: {genre} </p>
            </div>
            <div className='card_summary'>{summary} </div>
            <div className='card_buttons'>
                <button className='button'>Edit</button>
                <button className='button'>Delete</button>

            </div>
        </div>
    )
}

export default Card