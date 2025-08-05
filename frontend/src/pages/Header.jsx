// src/components/Header.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="main-header">
      <h1 className="header-title" onClick={() => navigate('/')}>
        Intern Portal
      </h1>
      {/* <nav className="header-nav">
        <button onClick={() => navigate('/login')} className="header-button">
          Login
        </button>
      </nav> */}
    </header>
  );
};

export default Header;