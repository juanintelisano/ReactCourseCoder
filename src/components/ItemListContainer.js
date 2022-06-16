import ItemCount from './ItemCount.js'
import {useEffect} from 'react'
import {useState} from "react"
import Productos from './Productos.js'
import MockAsync from './MockAsync.js'
import ItemList from './ItemList.js'




const ItemListContainer = (props) => {


const [items, setItems] = useState ([])


useEffect(() => {
    MockAsync (2000, Productos)
    .then(rdo => setItems(rdo))
}, [items])
return(
    <div> 
        <ItemList products={items} />
    </div>
)




}

export default ItemListContainer