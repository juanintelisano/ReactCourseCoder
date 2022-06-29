import './estilos.css'
import Nav from './components/NavBar.js'
import {BrowserRouter} from "react-router-dom"
import Main from "./components/Main.js"




const App = () => {



  return(
    <BrowserRouter>

          <Nav/> 
          <Main/>

    </BrowserRouter>
  ) 
}


export default App
