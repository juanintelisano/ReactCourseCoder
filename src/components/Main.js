import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'
import {Routes, Route} from "react-router-dom"

const Main = () => {

  return (
    <main>
        <h2>Home</h2>
        <Routes>
          <Route path="/"element ={<ItemListContainer/>} />
          <Route path="/categoria/:id"element ={<ItemListContainer/>} />
          <Route path="/detail/:id"element ={<ItemDetailContainer/>} />
          <Route path="/category/:categoryId"element ={<ItemDetailContainer/>} />

        </Routes>
    </main>
  )
}


export default Main;
