import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from "./components/Checkout/Checkout"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemById from './components/ItemById/ItemById';
import Cart from './components/Cart/Cart';
import CartProvider from "./Context/CartContext"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer/>}/>
            <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route exact path="/checkout" element={<Checkout/>}/>
          </Routes>
        </CartProvider>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

