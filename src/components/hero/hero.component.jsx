import React from 'react';

import ButtonSolid from '../buttons/button-solid.component';

import './hero.styles.scss';

const Hero = ({imageUrl, ...otherHeroProps}) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="hero_container h-100">
        <div className="hero_content">
          <h6 className="subtitle text-uppercase font_600">{otherHeroProps.subtitle}</h6>
          <h1 className="title font_1">{otherHeroProps.title}</h1>
          <p className="description">{otherHeroProps.description}</p>
          <ButtonSolid 
            link='/'
            text={otherHeroProps.button}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;