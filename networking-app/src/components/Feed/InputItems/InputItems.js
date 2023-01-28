import React from 'react'
import './InputItems.css'

function InputItems({ Icon, title, color }) {
    return (
        <div className='inputItems'>
            {Icon && <Icon style={{ color: color }} />}
            <p>{title}</p>
        </div>
    )
}

export default InputItems