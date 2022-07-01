import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-router-dom'


const Header = () => {
return (
    <header>
        <Link to ="/"><h1>title</h1></Link>
        <Nav inHeader={true} navcl="navbar-header"/>
        
    </header>
  )
}

export default Header