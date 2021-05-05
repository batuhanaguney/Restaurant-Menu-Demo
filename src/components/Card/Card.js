import React from 'react';
import './Card.css';

function Card({ src, title, description, price,setSb}) {
    return (
        
             <div className='card' onClick={setSb} style={{width:"25%"}}>
                 <img src={src} alt="" />
                 <div className="card__info">
                       <h2>{title}</h2>
                       <h4>{description}</h4>
                       <h1>{price}</h1>
                </div>
             </div>
        
       
    )
}

export default Card