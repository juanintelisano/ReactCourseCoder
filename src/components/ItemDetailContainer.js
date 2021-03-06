
import {useEffect} from 'react'
import {useState} from "react"
import Productos from './Productos.js'
import ItemDetail from './ItemDetail.js'
import {getProductById} from './Productos.js'
import { useParams } from 'react-router-dom'


//main const
const ItemDetailContainer = () => {
    const [product, setproduct] = useState ({})
    const {id} = useParams()

useEffect(() => {
   getProductById(parseInt(id)) //id que le pase en el params
        .then((res) =>{  
            setproduct(res) 
        }, [])
        .catch((error) =>{
        console.log(error)
        })
    },) 
console.log(product)

//returning
return(
    <div> 
        { product?.length < 0 ? <p>EMPTY, please reload...</p>:<ItemDetail {...product} />}
    </div>
)

}

export default ItemDetailContainer