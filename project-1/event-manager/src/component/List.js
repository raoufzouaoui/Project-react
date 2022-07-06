
import React from 'react';

function List({events}){
    return(
        <div>
           {
           events.map((events)=>{
            const {id,name,date,image}=events;
            return(
                <article className="article" key={id}>
                    <img src={image} alt={name}></img>
                    <div className='namedate'>
                        <h4>{name}</h4>
                        <p>{date} </p>
                    </div>
                    
                </article>
                 )
           })
           }
        </div>
    );
};

export default List;