
import {useEffect} from 'react'
import {useState} from "react"
import Productos from './Productos.js'
import ItemDetail from './ItemDetail.js'
import {getProduct} from './Productos.js'




const ItemDetailContainer = () => {
    const [product, setproduct] = useState ({})

useEffect(() => {
   getProduct()
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
        <ItemDetail product={product} />
    </div>
)

}

export default ItemDetailContainer