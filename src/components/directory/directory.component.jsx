import React from 'react';

import SectionHeader from '../section-header/section-header.component';
import Category from '../category/category.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      wsections: [{
        title: "Dress Collection",
        imageUrl: "https://i.postimg.cc/tTKvQ0X9/dresses-banner.png",
        id: "1"
      },
      {
        title: "Blazer Collection",
        imageUrl: "https://i.postimg.cc/D01j7CZL/blazer-banner.png",
        id: "2"
      },
      {
        title: "Bags Collection",
        imageUrl: "https://i.postimg.cc/L4P0ksT5/bags-banner.png",
        id: "3"
      },
      {
        title: "Footwear Collection",
        imageUrl: "https://i.postimg.cc/k4T0SWd4/footwear-banner.png",
        id: "4"
      }
      ]
    }
  }

  render() {
    return (
      <section className="section">
        <SectionHeader
          subtitle="Discover"
        >
          <h2 className="title mb-0">Collections</h2>
        </SectionHeader>
        <div className="category_grid">
          {
            this.state.wsections.map( ({title, subtitle, imageUrl, pos, id}) => (
              <Category id={id} title={title} subtitle={subtitle} position={pos} imageUrl={imageUrl} />
            ))
          } 
        </div>
      </section>
    )
  }
}

export default Directory;