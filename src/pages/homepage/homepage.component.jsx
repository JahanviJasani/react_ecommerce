import React from 'react';

import { Container } from 'react-bootstrap'
import Directory from '../../components/directory/directory.component'

import './homepage.styles.scss'

const HomePage = () => {
  return (
    <section>
      <Container fluid>
        <Directory />
      </Container>
    </section>
  )
}

export default HomePage;