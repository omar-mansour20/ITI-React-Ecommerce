import React from "react";
import "./HomePage.css"; 
import CustomSlider from './CustomSlider';
import {  useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate(); 
  const shopNow = () => {
    navigate('/products'); 
  }
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to E-Commerce!</h1>
          <p>Your one-stop destination for all things shopping.</p>
          <button className="cta-button" onClick={shopNow}>Shop Now</button>
        </div>
      </section>


      <div>
       <CustomSlider  />
     </div>

      {/* Categories Section */}
      <section className="categories">
        <h2>Featured Categories</h2>
        <div className="categories-grid">
          <div className="category-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi2gfiWgwwHQWrcKgWX3nw4X2bZ5t5xCV2pw&s"
              alt="Category 1"
            />
            <h3>Clothing</h3>
          </div>
          <div className="category-card">
            <img
              src="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-white_155003-3941.jpg"
              alt="Category 2"
            />
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <img
              src="https://media.istockphoto.com/id/1211554164/photo/3d-render-of-home-appliances-collection-set.jpg?s=612x612&w=0&k=20&c=blm3IyPyZo5ElWLOjI-hFMG-NrKQ0G76JpWGyNttF8s="
              alt="Category 3"
            />
            <h3>Home Appliances</h3>
          </div>
          <div className="category-card">
            <img
              src="https://st4.depositphotos.com/12985656/24190/i/450/depositphotos_241907032-stock-photo-top-view-watches-lipstick-earrings.jpg"
              alt="Category 4"
            />
            <h3>Accessories</h3>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 E-Commerce. All rights reserved.</p>
          <p>
            Follow us on
            <a href="#"> Facebook</a>,<a href="#"> Instagram</a>,
            <a href="#"> Twitter</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
