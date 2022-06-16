// Recibe una card

import React from 'react'
import ItemCount from './ItemCount'


function Item ({id, title, tic, price, imgURL}) {
    return(
        <div key={id}>
        <h1> {title} </h1>
        <img src={imgURL} alt={title} />
        <br></br>
        <img src={tic}/>
        <h2> {price} </h2>
        <ItemCount stock={5}  initial={1} />
        </div>
    )
}

export default Item