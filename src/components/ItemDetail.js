// Recibe una card

import React from 'react'



function ItemDetail ({id, title, tic, price, imgURL}) {
    return(
        <div className='CaballoZ' key="14">
        <h1> Caballo Zangersheide </h1>
        <img src="./public/image/Zangershide.jpg" />
        <p>The Zangersheide is a Belgian breed or stud-book of warmblood sport horses. It is one of three Belgian warmblood breeds or stud-books, the others being the Belgian Sport Horse and the Belgian Warmblood. It is bred at the stud of the same name near Lanaken, in the province of Limburg in eastern Flanders, close to the Dutch border. Breeding and selection are directed at performance in show-jumping</p>
        <br></br>
        <img src="./public/image/belgium.png"/>
        <h2> 12000 </h2>
        </div>
    )
}

export default ItemDetail;