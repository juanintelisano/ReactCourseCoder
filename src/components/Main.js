import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'
import {Routes, Route} from "react-router-dom"

const Main = () => {

  return (
    <main>
        <h2></h2>
        <Routes>
          <Route path="/"element ={<ItemListContainer/>} />
          <Route path="/detail/:id"element ={<ItemDetailContainer/>} />
          <Route path="/categoria/:categoryId"element ={<ItemListContainer/>} />
        </Routes>
    </main>
  )
}


export default Main;
