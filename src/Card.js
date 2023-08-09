import React from "react";

function Card({id, cardImg}){
    console.log('This is cardImg', cardImg);
    return(
        <div key={id} className="card-image">
            <img  src={cardImg}></img>
        </div>
    )
}

export default Card;