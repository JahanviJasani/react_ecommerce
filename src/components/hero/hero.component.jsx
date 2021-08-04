import React from 'react';

import ButtonSolid from '../buttons/button-solid.component';

import './hero.styles.scss';

const Hero = ({imageUrl, subtitle, title, description}) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="hero_container h-100">
        <div className="hero_content">
          <h6 className="subtitle text-uppercase font_600">{subtitle}</h6>
          <h1 className="title font_1">{title}</h1>
          <p className="description">{description}</p>
          <ButtonSolid 
            link='/'
            text='Shop Now'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;