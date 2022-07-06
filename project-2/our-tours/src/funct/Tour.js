import React,{useState} from 'react';
import Tours from './Tours';

function Tour({id,image,info,price,name, removeTour}){
    const[readmore,setReadmore]=useState(false);
    return (<div className='tour'>
        <img src={image} alt={name} />
        <footer>
            <div className='info-tour'>
                <h4>{name}</h4>
                <h4 className='tour-price'>${price}</h4>
            </div>
            <p>{
            readmore ? info:`${info.substring(0,200)}`} <button className='readmore' onClick={() => setReadmore(!readmore)}>{readmore?'Show less':'read more'}</button></p>
            <button className='remove' onClick={() => removeTour(id) }>remove</button>
        </footer>
       <h2>  </h2>
    </div>);
}

export default Tour;