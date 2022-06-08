
import './estilos.css';

import Nav from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return(
    <>  
    <Nav /> 
    <ItemListContainer greeting = "List" />

    </>
  ) 
}


export default App
