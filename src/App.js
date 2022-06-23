
import './estilos.css'
import Nav from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js'
import ItemCount from './components/ItemCount.js'
import ItemDetailContainer from './components/ItemDetailContainer'



const App = () => {



  return(
    <>  
    <Nav/> 
    <ItemListContainer greeting = "List" />
    <br></br>
    <ItemDetailContainer/>
    </>
  ) 
}


export default App
