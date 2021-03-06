import React from 'react';

import './section-header.styles.scss';

const SectionHeader = ({ children, title, subtitle, description, ...otherProps }) => {
  return (
    <div className={`section_header ${otherProps.className}`}>
      {
        subtitle?
        <h6 className="subtitle text-uppercase font_600 theme_font">{subtitle}</h6>
        : null
      }
      {children}
      {
        description?
        <p className="description">{description}</p>
        : null
      }
    </div>
  )
}

export default SectionHeader;