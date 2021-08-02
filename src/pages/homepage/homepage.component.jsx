import React from 'react';

import { Container } from 'react-bootstrap';
import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss'

const HomePage = () => {
  return (
    <div>
      <div className="hero">
      </div>
      <section>
        <Container fluid>
          <Directory />
        </Container>
      </section>
    </div>
  )
}

export default HomePage;