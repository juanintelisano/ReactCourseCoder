// Recibe una card

import React from 'react'
import ItemCount from './ItemCount.js'




const ItemDetail = ({id, imgURL, tic, title, price, stock,description}) =>  {
    return(
        <div className='CaballoC' key="1">
            <h1 >{title} </h1>
            <img src={imgURL} className="imgURL" />
            <p>Descripción <br></br>{description}</p>
            <br></br>
            <img src={tic} className="tic"/>
            <h2 className="price">${price}  </h2>
            <ItemCount stock={stock}/>
        </div>

    )
}

export default ItemDetail