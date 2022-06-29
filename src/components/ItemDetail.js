// Recibe una card

import React from 'react'
import ItemCount from './ItemCount.js'




const ItemDetail = ({id, imgURL, tic, title, price, stock}) =>  {
    return(
        <div className='CaballoC' key="1">
            <h1>{title} </h1>
            <img src={imgURL} />
            <p>descriprion</p>
            <br></br>
            <img src={tic}/>
            <h2>{price} </h2>
            <ItemCount stock={stock}/>
        </div>

    )
}

export default ItemDetail