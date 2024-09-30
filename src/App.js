import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Products from './components/Products';
import ProductForm from './components/ProductForm';
import ProductDetails from './components/ProductDetails';

import './App.css';

function App() {
  const [user, setUser] = useState();
  const [products, setProducts] = useState([
    {
      "name": "Camera Canon",
      "price": "100",
      "quantity": "6",
      "imageUrl": "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
    {
      "name": "Camera Nikon",
      "price": "250",
      "quantity": "17",
      "imageUrl": "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
    {
      "name": "Camera Sony",
      "price": "400",
      "quantity": "9",
      "imageUrl": "https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
    {
      "name": "Make up",
      "price": "150",
      "quantity": "10",
      "imageUrl": "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
    {
      "name": "Make up",
      "price": "200",
      "quantity": "13",
      "imageUrl": "https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
    {
      "name": "Watch Cartier",
      "price": "1",
      "quantity": "1",
      "imageUrl": "https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
    {
      "name": "Watch Rolex",
      "price": "1",
      "quantity": "1",
      "imageUrl": "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
    {
      "name": "Watch omega",
      "price": "1",
      "quantity": "1",
      "imageUrl": "https://images.pexels.com/photos/128206/pexels-photo-128206.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
    {
      "name": "IPhone 10",
      "price": "1",
      "quantity": "1",
      "imageUrl": "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
    {
      "name": "samsung s23 ultra",
      "price": "1",
      "quantity": "1",
      "imageUrl": "https://images.pexels.com/photos/20348037/pexels-photo-20348037/free-photo-of-back-of-the-samsung-galaxy-s24-smartphone.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
    {
      "name": "IPhone 6",
      "price": "1",
      "quantity": "1",
      "imageUrl": "https://images.pexels.com/photos/191841/pexels-photo-191841.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  },
  ]);

  

  const loginUser = (name) => {
    setUser(name);
  }; 
  const logoutUser = () => setUser(null);
  const addProduct = (product) => setProducts([...products, product]);
  const editProduct = (index, updatedProduct) => {
    const newProducts = [...products];
    newProducts[index] = updatedProduct;
    setProducts(newProducts);
  };

  return (
    <Router>
      <div className="app">
        {user&&<Navbar user={user} logout={logoutUser} />}
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login loginUser={loginUser} />} />
          <Route path="/products" element={<Products products={products} setProducts={setProducts} editProduct={editProduct} />} />
          <Route path="/add-product" element={<ProductForm addProduct={addProduct} />} />
          <Route path="/product/:id" element={<ProductDetails products={products} />} />
          <Route path="/edit-product" element={<ProductForm editProduct={editProduct} />} />
        </Routes>
        {/* {user&&<Navbar user={user} logout={logoutUser} />} */}
      </div>
    </Router>
  );
}

export default App;
