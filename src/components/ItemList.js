//mapeo. Tirnr que recibir si o si un array

import React from 'react'
import Item from './Item'


function ItemList({products}) {
  return (

        products.map (p =>
            <Item id={p.id} 
            title={p.title} 
            imgURL={p.imgURL} 
            tic={p.tic}
            price={p.price} 
            stock={p.stock} />
            )
  )
}

export default ItemList