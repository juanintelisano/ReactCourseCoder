
import {useEffect} from 'react'
import {useState} from "react"
import Productos from './Productos.js'
import ItemDetail from './ItemDetail.js'
import {getProductById} from './Productos.js'
import { useParams } from 'react-router-dom'

//printing horses
/*export const product = () => {
Productos.forEach(object => {
    if (object.id === 1 ){
      console.log("horse:", object)
    }
  })
}*/

//main const
const ItemDetailContainer = () => {
    const [product, setproduct] = useState ({})
    const {id} = useParams()
    console.log(parseInt(id) )

useEffect(() => {
   getProductById(id) //id que le pase en el params
        .then((res) =>{  
            setproduct(res) 
        })
        .catch((error) =>{
        console.log(error)
        })
    },) 
console.log(product)

//returning
return(
    <div> 
        <ItemDetail {...product} />
    </div>
)

}

export default ItemDetailContainer