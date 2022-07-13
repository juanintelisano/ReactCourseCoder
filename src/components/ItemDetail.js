// Recibe una card

import React from 'react'
import ItemCount from './ItemCount.js'
import { Link } from 'react-router-dom'
import {useState} from "react"




const ItemDetail = ({id, imgURL, tic, title, price, stock,description, initial}) =>  {
const [cantidadSeleccioanda] = useState(initial)
    return(
        <div className='CaballoC' key="1">
            <h1 >{title} </h1>
            <img src={imgURL} className="imgURL" />
            <p>Descripción <br></br>{description}</p>
            <br></br>
            <img src={tic} className="tic"/>
            <h2 className="price">${price}  </h2>
            <ItemCount initial={1} stock={stock} OnAdd={OnAdd}/>
            <button><Link to="/carrito">Proceder con la compra</Link></button>
        </div>

    )
}
const OnAdd = (cantidadSeleccioanda)=>{
    console.log("desde item detail :" +  cantidadSeleccioanda)
    }

export default ItemDetail