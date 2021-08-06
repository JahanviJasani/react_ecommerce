import React from 'react'

import ButtonTheme from '../buttons/button-theme.component'
import CollectionItem from '../collection-item/collection-item.component';
import { Container, Row, Col } from 'react-bootstrap';

import './collection-preview.styles.scss';

const CollectionPreview = ({ id, title, items }) => {
  return (
    <div className="collection_preview">
      <Container fluid>
        <div className="collection_title_block">
          <h1 className="collection_title font_500">{title}</h1>
          <ButtonTheme 
            link='/shop'
            text='View All'
            className="btn_outline"
          />
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