import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import './header.styles.scss';

const Header = () => {
  return (
    <div className="header"> 
      <Container fluid>
        <Row>
          <Col lg={2}>
            <div className="logo_container">
              <Link className="logo font_600 text-uppercase" to="/">Grapple</Link>
            </div>
          </Col>
          <Col lg={7}>
            <div className="header_menu d-none d-lg-block">
              <Link to="/shop" className="menu_link">
                <span className="link_text">About</span>
              </Link>
              <Link to="/shop" className="menu_link">
                <span className="link_text">Shop</span>
              </Link>
              <Link to="/shop" className="menu_link">
                <span className="link_text">Blog</span>
              </Link>
              <Link to="/shop" className="menu_link">
                <span className="link_text">Contact</span>
              </Link>
            </div>
          </Col>
          <Col lg={3}>
            <div class="header_account d-none d-lg-inline-block">
              <Link to="/signin" className="account_link">
                <span className="link_text">Sign In</span>
              </Link>
              <span className="separator">/</span>
              <Link to="/signup" className="account_link">
                <span className="link_text">Sign Up</span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header;