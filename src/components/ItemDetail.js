// Recibe una card

import React from 'react'
import ItemCount from './ItemCount.js'




const ItemDetail = ({product01}) =>  {
    return(
        <div className='CaballoC' key="1">
            <h1> Caballo Criollo </h1>
            <img src="./public/image/Argentine Criollo.jpg" />
            <p>Por caballo criollo se conoce a una raza equina que se distribuye por toda América del Sur, en América Central y América del Norte. En los distintos países del continente se ha ido desarrollando de diverso modo. El caballo criollo es la raza característica del Cono Sur y cada año son más quienes lo crían, lo utilizan para las duras tareas del campo, o lo disfrutan en sus momentos de ocio.</p>
            <br></br>
            <img src="./public/image/argFLAG.png"/>
            <h2> $7000 </h2>
            <ItemCount/>
        </div>

    )
}

export default ItemDetail