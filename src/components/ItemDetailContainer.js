
import {useEffect} from 'react'
import {useState} from "react"
import Productos from './Productos.js'
import MockAsync from './MockAsync.js'
import ItemDetail from './ItemDetail.js'




const ItemDetailContainer = (PPP) => {


const [item2, setItems] = useState ([])
useEffect(() => {

    fetch ("./components/Productos.js")
.then((respuesta) =>{

    console.log(respuesta)
    console.log('loaded')
}, 4000)
.catch((error) =>{
    console.log( "hubo un error")
}, 4000)



    MockAsync (2500, Productos)
    .then(rdo => setItems(rdo))
}, [item2])
return(
    <div> 
        <ItemDetail />
    </div>
)



}

export default ItemDetailContainer