import React from 'react';
import './homepage.styles.scss'
import { Container } from 'react-bootstrap'
import Directory from '../../components/directory/directory.component'

const HomePage = () => {
  return (
    <div>
      <Container fluid>
        <Directory />
      </Container>
    </div>
  )
}

export default HomePage;