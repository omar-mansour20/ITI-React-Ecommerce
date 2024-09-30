import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ loginUser }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setErrors({});

    const newErrors = {};
    if (name.length < 4) {
      newErrors.name = 'Name must be at least 4 characters long';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    loginUser(name);
    navigate('/home');
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-title">Login</h2>
      <div className="form-group">
        <label className="form-label">Name:</label>
        <input 
          type="text" 
          className="form-input" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>
      <div className="form-group">
        <label className="form-label">Password:</label>
        <input 
          type="password" 
          className="form-input" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>
      <button type="submit" className="login-button">Login</button>
    </form>
  );
};

export default Login;
