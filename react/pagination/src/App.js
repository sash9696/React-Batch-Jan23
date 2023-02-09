import React, { useState } from 'react'
import { useFetch } from './CustomHooks/useFetch'
import { url } from './resource'
import Follower from './components/Follower'


function App() {
  const { loading, data } = useFetch(url)
  const [page, setPage] = useState(0)

  console.log(data)
  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <div className='followers'>
        <div className='container'>
          {
            data?.map((follower) => {
              return <Follower key={follower.id} {...follower} />
            })
          }
        </div>
        {
          !loading && (
            <div className='btn-container'>
              <button className='prev-btn'>prev</button>
              {
                data?.map((item, index) => {

                  return (
                    <button key={index} className={`page-btn ${index === page ? 'active-btn' : null}`} >{index + 1}</button>
                  )
                })
              }
              <button className='next-btn'>
                next
              </button>
            </div>
          )
        }
      </div>
    </main>
  )
}

export default App