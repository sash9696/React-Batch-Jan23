import React from 'react'
import './Home.css'
import Sidebar from './Sidebar/Sidebar'

function Home() {
    return (
        <div className='container_home'>

            <Sidebar />
            {/* <Feed/>
            <Widgets/> */}
        </div>
    )
}

export default Home