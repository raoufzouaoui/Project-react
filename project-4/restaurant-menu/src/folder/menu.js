import React from 'react';

function Menu({items}){
    return(
        <div className='section'>
            {items.map((menuItem) =>
            {
                const {id,title,img,price,desc}=menuItem;
            return(
                <div key={id } className='menu-item'>
                    <img src={img} alt={title}></img>
                    <div className='info'>
                        <header className='title-price'>  
                            <h3 className='title'>{title} </h3>
                            <h4 className='price'>${price} </h4>
                        </header>
                        <p className='desc'>{desc}</p>
                    </div>
                </div>
            )})}
        </div>
    )
}

export default Menu;