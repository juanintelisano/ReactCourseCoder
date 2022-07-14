import {useState} from "react"


const ItemCount = ({stock, initial, OnAdd}) => {
const [contador, setContador] = useState(initial)

const aumentarContador = () => {
    
    console.log(contador)
    if (contador < 5){
        setContador(contador + 1)
    } else {
        alert('no hay mas stock')
    }
}
const disminuirContador =() => {

    console.log(contador)
    if(contador>0) { 
        setContador(contador - 1)
    } else {

    }
}
const confirmar = (e) => {
    OnAdd(contador)
    alert ('comprando' +  contador  +  'articulos')
    e.stopPropagation()
    console.log(e.target)

}


const heandleSubmit = (e) => {
    e.preventDefault()
    console.log("validando...")
}
const handleKeyDown = (e) => {
    e.preventDefault()
}

    return (
        <div onClick={(e)=>{console.log(e.currentTarget)}} >
            <p> Cantidad de articulos seleccionados: {contador}</p>
            <button onClick = {aumentarContador}> + </button>
            <button onClick = {disminuirContador}> - </button>
            <button onClick = {confirmar}> confirmar </button>
            <a href="http://google.com" onClick={(e)=>{
                e.preventDefault()
            }}>google</a>
            <form onSubmit={heandleSubmit}>
                <input type="text" onKeyDown={handleKeyDown}/>
            </form>

        </div>
        )
}

export default ItemCount
