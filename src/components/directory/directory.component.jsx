import React from 'react';

import Category from '../category/category.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      wsections: [{
        title: "Dress",
        subtitle: "Collection",
        imageUrl: "https://images2.imgbox.com/8d/06/lO0ewEKh_o.jpg",
        pos: "left",
        id: "1"
      },
      {
        title: "Blazer",
        subtitle: "Collection",
        imageUrl: "https://images2.imgbox.com/79/fe/UI6K3eGS_o.jpg",
        pos: "left",
        id: "2"
      },
      {
        title: "Winter",
        subtitle: "Wear",
        imageUrl: "https://images2.imgbox.com/66/a6/V51hjqwm_o.jpg",
        pos: "right",
        id: "3"
      },
      {
        imageUrl: "https://images2.imgbox.com/3b/7e/tBLpU1iH_o.jpg",
        pos: "center",
        id: "4"
      }
      ]
    }
  }

  render() {
    return (
      <div className="category_grid">
        {
        this.state.wsections.map( ({title, subtitle, imageUrl, pos, id}) => (
          <Category id={id} title={title} subtitle={subtitle} position={pos} imageUrl={imageUrl} />
        ))
        } 
      </div>
    )
  }
}

export default Directory;