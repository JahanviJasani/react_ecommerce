import React from 'react';

import { Container } from 'react-bootstrap';
import './promotional-header.styles.scss'

const PromotionalHeader = () => {
  return (
    <div className="topbar">
      <Container fluid>
        <p className="topbar_text text-center">Join our showroom and get 25 % off ! Coupon code : Bangbang45</p>
      </Container>
    </div>
  )
}

export default PromotionalHeader;