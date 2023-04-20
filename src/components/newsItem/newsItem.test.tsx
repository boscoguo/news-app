import React from 'react'
import { render } from '@testing-library/react'
import NewsItem from './newsItem'
import { formatDate } from '../../util/format'

describe('NewsItem', () => {
  it('renders correctly', () => {
    const newItem = {
      headline: 'Test Headline',
      standFirst: 'Test Standfirst',
      date: new Date(),
      link: 'https://example.com',
      thumbnail: 'https://example.com/image.png',
    }
    const { getByText, getByAltText } = render(<NewsItem newItem={newItem} />)
    expect(getByText('Test Headline')).toBeInTheDocument()
    expect(getByText('Test Standfirst')).toBeInTheDocument()
    expect(
      getByText(new RegExp(formatDate(newItem.date, 'YYYY-MM-DD, h:mm:ss a'))),
    ).toBeInTheDocument()
    expect(getByText('https://example.com')).toBeInTheDocument()
    expect(getByAltText('Test Headline')).toBeInTheDocument()
  })
})
