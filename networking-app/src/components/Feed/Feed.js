import React from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import PhotoIcon from '@mui/icons-material/Photo';
import InputItems from './InputItems/InputItems';
import Posts from './Posts/Posts';

function Feed() {
    return (
        <div className='feed_container'>

            <div className='container'>
                <div className='input_container'>
                    <CreateIcon />
                    <form>
                        <input type='text' />
                        <button>Post</button>
                    </form>
                </div>
                <div className='input_items'>
                    <InputItems
                        Icon={PhotoIcon}
                        title='Photo'
                        color='#70B5f9'
                    />
                </div>
            </div>

            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
        </div>
    )
}

export default Feed