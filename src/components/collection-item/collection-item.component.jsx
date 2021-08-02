import React from 'react';

const CollectionItem = ({imageUrl, brand, name, price}) => {
  return (
    <a href="" className="item_preview">
      <img className="item_img" src={`${imageUrl}`} />
      <div className="item_description">
        <h2 className="item_brand">{brand}</h2>
        <div className="item_name">{name}</div>
        <div className="item_price">₹{price}</div>
      </div>
    </a>
  )
}

export default CollectionItem;