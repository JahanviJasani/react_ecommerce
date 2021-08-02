import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { Container, Row, Col } from 'react-bootstrap'

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
        <div className="shop_hero">
        </div>
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