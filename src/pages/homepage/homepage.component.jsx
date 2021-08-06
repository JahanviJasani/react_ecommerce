import React from 'react';

import { Container } from 'react-bootstrap';
import Hero from '../../components/hero/hero.component';
import SectionHeader from '../../components/section-header/section-header.component';
import Directory from '../../components/directory/directory.component';

const HomePage = () => {
  return (
    <div>
      <Hero 
        imageUrl='https://i.postimg.cc/T2jnbWwN/home-banner.jpg' 
        subtitle="Designer Collection"
        button='Shop Now'
      >
        <SectionHeader
          description= 'Shop the latest clothing and handbags from top fashion brands.'
        >
          <h6 className="subtitle text-uppercase font_600 dark_font">Designer Collection</h6>
          <h2 className="title hero_title">Luxury Dresses</h2>
        </SectionHeader>
      </Hero>
      <section>
        <Container fluid>
          <Directory />
        </Container>
      </section>
    </div>
  )
}

export default HomePage;