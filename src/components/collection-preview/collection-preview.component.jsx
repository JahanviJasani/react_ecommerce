import React from 'react'

import CollectionItem from '../collection-item/collection-item.component';
import { Container, Row, Col } from 'react-bootstrap';

import './collection-preview.styles.scss';

const CollectionPreview = ({ id, title, items }) => {
  return (
    <div className="collection_preview">
      <Container fluid>
        <div className="collection_title_block">
          <h1 className="collection_title">{title}</h1>
          <a href="" className="btn_main">View All</a>
        </div>
        <Row>
          {
            items
            .filter((item, index) => index<4)
            .map(({id, ...otherItemProps}) => (
              <Col>
                <CollectionItem key={id} {...otherItemProps} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default CollectionPreview;