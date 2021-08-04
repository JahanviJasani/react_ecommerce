import React from 'react';

import Hero from '../../components/hero/hero.component';
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
          title='Get Your Fashion Style' 
          description= 'Shop the latest clothing, shoes, and handbags from top fashion brands, style icons, and celebrities.'
        />
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