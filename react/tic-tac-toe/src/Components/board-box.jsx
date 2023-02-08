
import React from 'react'

function Box({ value, handleBoxClicked }) {
    return (
        <button
            className='board-box'
            onClick={handleBoxClicked}
        >
            {value}
        </button>
    )
}

export default Box