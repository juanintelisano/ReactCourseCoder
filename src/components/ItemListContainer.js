import ItemCount from './ItemCount.js'
import {useEffect} from 'react'
import {useState} from "react"
import Productos from './Productos.js'
import MockAsync from './MockAsync.js'
import ItemList from './ItemList.js'
import { useParams } from 'react-router-dom'



const ItemListContainer = (props) => {


const [items, setItems] = useState ([])
const {categoryId} = useParams



useEffect(() => {
    if(!categoryId){
    MockAsync (2000, Productos)
    .then(rdo => setItems(rdo)) } else{ alert ("error")}
}, [items])
return(
    <div> 
        { items?.length < 0 ? <p>EMPTY, please reload...</p>: <ItemList products={items} /> }
    </div>
)




}

export default ItemListContainer