import React, { useEffect, useState } from 'react'
import { useFetch } from './CustomHooks/useFetch'
import { url } from './resource'
import Follower from './components/Follower'


function App() {
  const { loading, data } = useFetch(url)
  const [followers, setFollowers] = useState([])
  const [page, setPage] = useState(0)

  useEffect(() => {

    if (loading) return

    setFollowers(data[page])


  }, [loading, page])


  function handlePage(index) {
    setPage(index)
  }

  function nextPage() {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })

  }

  function prevPage() {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })

  }

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <div className='followers'>
        <div className='container'>
          {
            followers?.map((follower) => {
              return <Follower key={follower.id} {...follower} />
            })
          }
        </div>
        {
          !loading && (
            <div className='btn-container'>
              <button className='prev-btn' onClick={prevPage}>prev</button>
              {
                data?.map((item, index) => {

                  return (
                    <button
                      key={index} className={`page-btn ${index === page ? 'active-btn' : null}`}
                      onClick={() => handlePage(index)}
                    >{index + 1}</button>
                  )
                })
              }
              <button className='next-btn' onClick={nextPage}>
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