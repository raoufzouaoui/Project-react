import React from 'react';
import Tour from './Tour';

function Tours ({tours, removeTour }) {
    return( 
        <div>
            <div className='title'>
                <h2>Our tours</h2>
                <div className='underline'></div>
            </div>
            <div>
                { tours.map((tour) => {
                   return <div>
                    <Tour key={tour.id} {...tour} removeTour=
                    {removeTour} />
                   </div>
                })
            }
            </div>
        </div>
    )
};
export default Tours;