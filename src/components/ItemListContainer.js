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

/*const onAdd = () => {}

if(items.length > 0) {
    return (
        <div>
        <main className="ILC">  
        <h3>{props.greeting}</h3>
        <ItemCount stock={5} onAdd={onAdd} initial={1} />
        </main>  
        </div>
    )
    } else {
    <div>
    <main className="ILC">  
    <h3>{props.greeting}</h3>
    <p> cargando </p>
    </main>  
    </div>
}*/




}

export default ItemListContainer