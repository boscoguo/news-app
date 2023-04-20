import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import PaginationComponent from './pagination'

describe('PaginationComponent', () => {
  it('renders correctly', () => {
    const props = {
      itemsPerPage: 10,
      totalItems: 100,
      paginate: jest.fn(),
    }
    const { getByText } = render(<PaginationComponent {...props} />)
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('10')).toBeInTheDocument()
  })

  it('calls paginate function when a pagination button is clicked', () => {
    const props = {
      itemsPerPage: 10,
      totalItems: 100,
      paginate: jest.fn(),
    }
    const { getByText } = render(<PaginationComponent {...props} />)
    fireEvent.click(getByText('3'))
    expect(props.paginate).toHaveBeenCalledWith(3)
  })
})
