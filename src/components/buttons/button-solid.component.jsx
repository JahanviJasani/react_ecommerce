import React from 'react';

import { Link } from 'react-router-dom';

import './button-solid.styles.scss';

const ButtonSolid = ({ link, text }) => {
  return (
    <Link className="btn_solid" to={link}>{text}</Link>
  )
}

export default ButtonSolid;