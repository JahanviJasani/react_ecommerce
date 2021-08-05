import React from 'react';

import { Link } from 'react-router-dom';

import './button-solid.styles.scss';

const ButtonSolid = ({ link, text, ...otherButtonProps }) => {
  return (
    <div>
      {
        link?
        (
          <Link className="btn_solid" to={link}>{text}</Link>
        )
        :
        (
          <button className={`btn_solid ${otherButtonProps.class}`}>
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

export default ButtonSolid;