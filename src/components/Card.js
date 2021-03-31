import React from 'react';

function Card({cardPhoto, cardButton, cardText}) {
    return(
        <div class="card" style={{marginBottom: '20px'}}>
            <img src={cardPhoto} class="card-img-top" alt="..."/>
            <div class="card-body" style={{display: 'flex', justifyContent: 'space-between', color: 'grey'}}>
                <p class
                ='text-center'>{cardText} </p>
                <span>{cardButton}</span>
            </div>
        </div>
    )
}

export default Card;
