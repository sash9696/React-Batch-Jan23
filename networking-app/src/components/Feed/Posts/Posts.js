import { Avatar } from '@mui/material'
import React from 'react'
import InputItems from '../InputItems/InputItems'
import './Posts.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Posts() {
    return (
        <div className='posts_container'>
            <div className='posts_header'>
                <p>
                    <Avatar>
                        S
                    </Avatar>
                </p>
                <div className='posts_info'>
                    <p className='posts_name'>john</p>
                    <p className='posts_des'>john@gmail.com</p>

                </div>
            </div>
            <div className='posts_body'>
                <p>this is a message </p>
            </div>
            <div className='posts_options'>
                <InputItems
                    Icon={ThumbUpIcon}
                    title='Like'

                />
            </div>
        </div>
    )
}

export default Posts