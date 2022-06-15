
import './estilos.css'
import Nav from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js'
import ItemCount from './components/ItemCount.js'




const App = () => {



  return(
    <>  
    <Nav/> 
    <ItemListContainer greeting = "List" />
    
    </>
  ) 
}


export default App
