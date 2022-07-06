import React from 'react';

const Categorie = ({categorie,filterItems}) =>{
    return(
        <div className='btn-categorie'>
            {categorie.map((category, index) => {
            return(
                <button type='button' className='filter-btn' key={index} onClick={() => filterItems(category)}>
                    {category}
 </button>
            )
        })}
        </div>
    )
}

export default Categorie;