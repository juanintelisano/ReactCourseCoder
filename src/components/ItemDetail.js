// Recibe una card

import React from 'react'
import ItemCount from './ItemCount.js'


const OnAdd = (cantidadSeleccioanda)=>{

}

const ItemDetail = ({id, imgURL, tic, title, price, stock,description}) =>  {
    return(
        <div className='CaballoC' key="1">
            <h1 >{title} </h1>
            <img src={imgURL} className="imgURL" />
            <p>Descripción <br></br>{description}</p>
            <br></br>
            <img src={tic} className="tic"/>
            <h2 className="price">${price}  </h2>
            <ItemCount initial={1} stock={stock} OnAdd={OnAdd}/>
            <button>Termianr compra</button>
        </div>

    )
}

export default ItemDetail