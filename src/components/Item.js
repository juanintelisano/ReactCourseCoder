// Recibe una card

import React from 'react'
import ItemCount from './ItemCount'
import {Link} from "react-router-dom"


function Item ({id, title, tic, price, imgURL}) {
    return(
        <div key={id}>
            <h1 className='title'> {title} </h1>
            <img src={imgURL} alt={title} className="imgURL"/>
            <br></br>
            <img src={tic} className="tic" />
            <h2 className="price"> ${price} </h2>
            <div className= "detail">
                <Link to ={`/detail/${id}`}>Detail</Link>
            </div>
  
        </div>
    )
}

export default Item