import React from 'react';

import { Container } from 'react-bootstrap';
import Hero from '../../components/hero/hero.component';
import Directory from '../../components/directory/directory.component';

const HomePage = () => {
  return (
    <div>
      <Hero 
        imageUrl='https://i.postimg.cc/T2jnbWwN/home-banner.jpg' 
        title='Designer Collection' 
        description= 'Shop the latest clothing and handbags from top fashion brands.'
      />
      <section>
        <Container fluid>
          <Directory />
        </Container>
      </section>
    </div>
  )
}

export default HomePage;