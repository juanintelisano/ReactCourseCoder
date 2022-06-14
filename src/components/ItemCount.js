import {useState} from "react"

const ItemCount = ({stock, initial, onAdd}) => {

const [contador, setContador] = useState(initial)


const aumentarContador = () => {
    
    console.log(contador)
    if (contador < 5){
        setContador(contador + 1)
    } else {
        alert('no hay mas stok')
    }
}

const disminuirContador =() => {

    console.log(contador)
    if(contador>0) { 
        setContador(contador - 1)
    } else {
        
    }
}



const confirmar = () => {
    alert ('comprando' +  contador  +  'articulos')
}

    return (
    <div>
    <p> Cantidad de articulos seleccionados: {contador}</p>
    <button onClick = {aumentarContador}> aumentar</button>
    <button onClick = {disminuirContador}> disminuir</button>
    <button onClick = {confirmar}>confirmar</button>
    </div>
)
}

export default ItemCount
