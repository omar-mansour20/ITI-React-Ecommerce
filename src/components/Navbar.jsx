import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ user, logout }) => {
  const navigate = useNavigate(); 
  const location = useLocation(); // Get current route

  const handleLogout = () => {
    logout();
    navigate('/login'); 
  };

  return (
    <nav>
      {(
        <ul className="navbar-list">
          <li>
            <Link 
              to="/Home" 
              className={`navbar-link ${(location.pathname === '/home'||location.pathname === '/Home') ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/products" 
              className={`navbar-link ${location.pathname === '/products' ? 'active' : ''}`}
            >
              Products
            </Link>
          </li>
          <li className="navbar-user">Welcome,  {user}</li>
          <li>
            <button className="navbar-button" onClick={handleLogout}>Logout</button>
          </li>
        </ul> 
      )}
    </nav>
  );
};  

export default Navbar;
