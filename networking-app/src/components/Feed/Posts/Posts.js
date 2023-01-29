import { Avatar } from '@mui/material'
import React from 'react'
import InputItems from '../InputItems/InputItems'
import './Posts.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Posts({ id, userId, name, tags, message, likeCount }) {
    return (
        <div className='posts_container'>
            <div className='posts_header'>
                <p>
                    <Avatar>
                        {name ? name[0] : 'J'}
                    </Avatar>
                </p>
                <div className='posts_info'>
                    <p className='posts_name'>{name ? name : 'John'}</p>
                    <p className='posts_des'>abc@gmail.com</p>

                </div>
            </div>
            <div className='posts_body'>
                <p>{message}</p>
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