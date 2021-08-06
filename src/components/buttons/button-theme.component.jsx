import React from 'react';

import { Link } from 'react-router-dom';

import './button-theme.styles.scss';

const ButtonTheme = ({ link, text, ...otherButtonProps }) => {
  return (
    <div>
      {
        link?
        (
          <Link 
            to={link}
            {...otherButtonProps}
          >
            {text}
          </Link>
        )
        :
        (
          <button 
            className={`btn_solid ${otherButtonProps.class}`}
            {...otherButtonProps}
          >
            {text}
          </button>
        )
      }
    </div>
    // {
    //   link ?
    //   (
    //     <Link className="btn_solid" to={link}>{text}</Link>
    //   )
    //   : null
    // }
  )
}

export default ButtonTheme;