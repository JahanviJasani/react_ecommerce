import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './header.styles.scss';

const Header = () => {
  return (
    <div className="header"> 
      <Container fluid className="d-flex justify-content-between h-100">
        <div className="logo_container">
          <Link className="logo" to="/">Grapple</Link>
        </div>
        <div className="nav_menu">
          <Link to="/shop" className="nav_link">About</Link>
          <Link to="/shop" className="nav_link">Shop</Link>
          <Link to="/shop" className="nav_link">Blog</Link>
          <Link to="/shop" className="nav_link">Contact</Link>
        </div>
      </Container>
    </div>
  )
}

export default Header;