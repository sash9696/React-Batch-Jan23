import React from 'react'
import './Tours.css'
import Tour from './Tour/Tour'

function Tours({ tours, removeTour }) {
    return (
        <section>
            <div className='title'>
                <h2>Available Tours</h2>
                <div className='underline'></div>
            </div>

            <div>
                {
                    tours?.map((tour) => (
                        <Tour key={tour.id} {...tour} removeTour={removeTour} />
                    ))
                }

            </div>

        </section>

    )
}

export default Tours