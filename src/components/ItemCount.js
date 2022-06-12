import {useState} from "react"

const ItemCount = ({stock, initial, onAdd}) => {

const [contador, setContador] = useState(initial)


const aumentarContador = () => {
    setContador(contador + 1)
    console.log(contador)
}

const disminuirContador =() => {
    setContador(contador - 1)
    if(contador>0) { 
        setContador(contador - 1)
    } else {

    }
}

const confirmar = () => {}

    return (
    <div>
    <p> El contador va: {contador}</p>
    <button onClick = {aumentarContador}> aumentar</button>
    <button onClick = {disminuirContador}> disminuir</button>
    <button>{confirmar}</button>
    </div>
)
}

export default ItemCount
