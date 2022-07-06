import React, { useState } from 'react';

const Question = ({title,info}) => {
    const [showInfo,setShowInfo]= useState(false);
    return(
        <div className='question'>
            <section>
                <h4>{title}</h4>
                <p>  <button className='btn' onClick={ () => setShowInfo(!showInfo)}>
                    {showInfo ? '-':'+'}
                    </button></p>
            </section>
            {showInfo && <p>{info}</p>}
        </div>
    )
}
export default Question;