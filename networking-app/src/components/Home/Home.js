import React from 'react'
import './Home.css'
import Sidebar from './Sidebar/Sidebar'
import Feed from '../Feed/Feed'

function Home() {
    return (
        <div className='container_home'>

            <Sidebar />
            <Feed />
            {/* <Widgets/> */}
        </div>
    )
}

export default Home