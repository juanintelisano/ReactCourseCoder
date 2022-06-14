import ItemCount from './ItemCount.js'

const ItemListContainer = (props) => {
        
const onAdd = () => {}

    return (
        <div>
        <main className="ILC">  
        <h3>{props.greeting}</h3>
        <ItemCount stock={5} onAdd={onAdd} initial={1} />
        </main>  
        </div>
    )
}

export default ItemListContainer