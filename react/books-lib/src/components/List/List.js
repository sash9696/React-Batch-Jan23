import React from 'react'
import './List.css'
import Card from './Card/Card'

function List({ books, getBooks }) {
    return (
        <div className='list'>
            {
                books?.map((book, index) => {

                    const { id, title, author, genre, summary } = book
                    return (
                        <Card
                            key={id}
                            id={id}
                            title={title}
                            author={author}
                            genre={genre}
                            summary={summary}
                            getBooks={getBooks}

                        />
                    )
                })
            }
        </div>
    )
}

export default List