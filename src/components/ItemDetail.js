// Recibe una card

import React from 'react'
import ItemCount from './ItemCount.js'
import { Link } from 'react-router-dom'
import {useState} from "react"




const ItemDetail = ({id, imgURL, tic, title, price, stock,description, initial}) =>  {
const [cantidadSeleccionada, setCantidad] = useState(initial)

const OnAdd = (cantidadSeleccionada)=>{
    console.log("desde item detail :" +  cantidadSeleccionada)
    setCantidad(cantidadSeleccionada)
    }

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


export default ItemDetail