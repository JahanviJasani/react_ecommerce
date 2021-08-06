import React from 'react';

import Hero from '../../components/hero/hero.component';
import SectionHeader from '../../components/section-header/section-header.component';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './shop.styles.scss';
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {

  constructor() {
    super();

    this.state = {
      collection: SHOP_DATA
    }
  }

  render() {

    const {collections} = this.state;

    return (
      <div>
        <Hero 
          imageUrl='https://i.postimg.cc/tCGQSJhx/shop-banner.jpg' 
          button="Shop Now"
        >
          <SectionHeader
            description= 'Shop the latest clothing and handbags from top fashion brands.'
          >
            <h2 className="title hero_title">Get Your Fashion Style</h2>
          </SectionHeader>
        </Hero>
        <section className="section pt-0">
          {
            this.state.collection.map( ({id, ...otherCollectionProps}) => (
              <CollectionPreview key={id} id={id} {...otherCollectionProps} />
            ))
          }
        </section>
      </div>
    );
  }
}

export default ShopPage;