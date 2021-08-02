import React from 'react';

import './category.styles.scss';

const Category = ({ title, subtitle, imageUrl, position, id }) => {
  return (
    <div className={`category item_${id}`}>
      <div className="category_img" style={{ backgroundImage: `url(${imageUrl})`}}></div>
      <div className={`category_content ${position}`}>
        <h2>
          {title}
          <br />
          {subtitle}
        </h2>
        <a href="" className="btn_theme">Shop Now</a>
      </div>
    </div>
  )
}

export default Category;