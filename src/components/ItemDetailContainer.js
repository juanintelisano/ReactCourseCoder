
import {useEffect} from 'react'
import {useState} from "react"
import Productos from './Productos.js'
import ItemDetail from './ItemDetail.js'
import {getProduct} from './Productos.js'


//printing horses
export const product01 = () => {
Productos.forEach(object => {
    if (object.id === 1 ){
      console.log("horse:", object)
    }
  })
}

//main const
const ItemDetailContainer = () => {
    const [product01, setproduct] = useState ({})
useEffect(() => {
   getProduct()
        .then((res) =>{  
            setproduct(res) 
        })
        .catch((error) =>{
        console.log(error)
        })
    },) 
console.log(product01)

//returning
return(
    <div> 
        <ItemDetail Product01={product01} />
    </div>
)

}

export default ItemDetailContainer