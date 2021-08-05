import React from 'react';

import { Link } from 'react-router-dom';

import './button-outline.styles.scss';

const ButtonOutline = ({ link, text, ...otherButtonProps }) => {
  return (
    <Link className={`btn_outline ${otherButtonProps.class}`} to={link}>{text}</Link>
  )
}

export default ButtonOutline;