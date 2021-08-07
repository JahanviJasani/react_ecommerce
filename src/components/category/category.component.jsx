import React from 'react';

import './category.styles.scss';

const Category = ({ title, imageUrl, id }) => {
  return (
    <div className="category">
      <div className="image_wrapper">
        <img src={imageUrl} />
      </div>
      <div className="category_content">
        <h2 className="font_1 dark_font mb-3">{title}</h2>
        <a href="" className="btn_theme">View Collection</a>
      </div>
    </div>
    // <div className={`category item_${id}`}>
    //   <div className="category_img" style={{ backgroundImage: `url(${imageUrl})`}}></div>
    //   <div className="">
    //     <h2>
    //       {title}
    //       <br />
    //       {subtitle}
    //     </h2>
    //     <a href="" className="btn_theme">Shop Now</a>
    //   </div>
    // </div>
  )
}

export default Category;