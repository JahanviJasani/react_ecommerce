import React from 'react';

import SectionHeader from '../section-header/section-header.component';
import ButtonTheme from '../buttons/button-theme.component';

import './hero.styles.scss';

const Hero = ({children, imageUrl, ...otherHeroProps}) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="hero_container h-100">
        <div className="hero_content">
          {children}
          <ButtonTheme 
            link='/'
            text={otherHeroProps.button}
            className="btn_solid d-inline-block"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;