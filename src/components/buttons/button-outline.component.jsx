import React from 'react';

import { Link } from 'react-router-dom';

import './button-outline.styles.scss';

const ButtonOutline = ({ link, text }) => {
  return (
    <Link className="btn_outline" to={link}>{text}</Link>
  )
}

export default ButtonOutline;