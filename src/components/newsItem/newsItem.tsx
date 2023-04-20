import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { NewItem } from '../../interfaces/newItem'
import RawHTML from '../rawHtml'
import { formatDate } from '../../util/format'

import './style.scss'

interface NewsItemProps {
  newItem: NewItem
}

const NewsItem: React.FC<NewsItemProps> = props => {
  const { newItem } = props

  return (
    <Row className="news--item">
      <Col xs="12" md="2" className="mb-3 news--item__left">
        <Image fluid rounded src={newItem.thumbnail} alt={newItem.headline} />
      </Col>
      <Col xs="12" md="10" className="mb-3 news--item__right">
        <h2 className="h6">{newItem.headline}</h2>
        <RawHTML rawContent={newItem.standFirst} />
        <p>{formatDate(newItem.date, 'YYYY-MM-DD, h:mm:ss a')}</p>
        <p>{newItem.link}</p>
      </Col>
    </Row>
  )
}

export default NewsItem
