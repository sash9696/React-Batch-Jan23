import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import PhotoIcon from '@mui/icons-material/Photo';
import InputItems from './InputItems/InputItems';
import Posts from './Posts/Posts';

function Feed() {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')
    console.log(posts)

    //get the data from an api

    async function getPosts() {
        //fetch returns a promise object
        const response = await fetch('https://dummyjson.com/posts')
        const data = await response.json()
        setPosts(data.posts)
    }

    useEffect(() => {
        getPosts()
    }, [])

    function addNewPost(e) {
        e.preventDefault()
        //write the logic to add the post

        const copyArray = [...posts]

        copyArray.unshift({
            id: 11,
            body: input,
            tags: ['HTML', "CSS"],
            name: 'Peter',
            userId: 10,
        })
        setPosts(copyArray)

        setInput("")

    }

    return (
        <div className='feed_container'>

            <div className='container'>
                <div className='input_container'>
                    <CreateIcon />
                    <form>
                        <input
                            type='text'
                            placeholder='write a post'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button onClick={addNewPost} >Post</button>
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

            {posts?.map((value) => (
                <Posts
                    key={value.id}
                    id={value.id}
                    message={value.body}
                    tags={value.tags}
                    name={value.name}
                    userId={value.userId}
                    likeCount={value.reactions}
                />
            ))}


        </div>
    )
}

export default Feed