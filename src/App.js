
import './estilos.css'
import Nav from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'



const App = () => {

  
  return(
    <>  
    <Nav /> 
    <ItemListContainer greeting = "List" />
    <ItemCount/>
    
    </>
  ) 
}


export default App
