import ItemCount from './ItemCount.js'
import {useEffect} from 'react'
import {useState} from "react"
import Productos, { getProductBycategoryId } from './Productos.js'
import MockAsync from './MockAsync.js'
import ItemList from './ItemList.js'
import { useParams } from 'react-router-dom'



const ItemListContainer = (props) => {


const [items, setItems] = useState ([])
const {categoryId} = useParams



useEffect(() => {
    if(!categoryId){
    MockAsync (2000, Productos)
    .then(rdo => setItems(rdo)) } else{ // <=
        getProductBycategoryId (categoryId)
        .then((res)=>{
            setItems(res)}, []) 
        .catch((error)=>{
            console.log(error)
        })
    }
    
}, [categoryId])

/*new Promise ((res, rej) => {
    setTimeout(() => {
        res(categoryId ? Productos.filter((producto) =>{
            return producto.categoryId == categoryId
        }) : Productos)
 
    }, 1000)
})
.then(resultado => {
    setItems(resultado)
})
.catch(()=>{

}, [categoryId])*/





return(
    <div> 
        { items?.length < 0 ? <p>EMPTY, please reload...</p>: <ItemList products={items} /> }
    </div>
)




}

export default ItemListContainer