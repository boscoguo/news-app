import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import PaginationComponent from './pagination'

describe('PaginationComponent', () => {
  const props = {
    itemsPerPage: 10,
    totalItems: 100,
    paginate: jest.fn(),
  }
  it('renders correctly', () => {
    const { getAllByRole } = render(<PaginationComponent {...props} />)
    const pageLinks = getAllByRole('button')
    expect(pageLinks).toHaveLength(13)
  })

  it('calls paginate function when a pagination button is clicked', () => {
    const { getByText } = render(<PaginationComponent {...props} />)
    fireEvent.click(getByText('3'))
    expect(props.paginate).toHaveBeenCalledWith(3)
    fireEvent.click(getByText('Last'))
    expect(props.paginate).toHaveBeenCalledTimes(2)
    expect(props.paginate).toHaveBeenCalledWith(10)
  })

  it('calls paginate function when a page link is clicked', () => {
    const { getByText } = render(<PaginationComponent {...props} />)
    const secondPageLink = getByText('2')
    const threePageLink = getByText('3')

    fireEvent.click(secondPageLink)
    fireEvent.click(threePageLink)
    expect(props.paginate).toHaveBeenCalledWith(2)
    expect(props.paginate).toHaveBeenCalledWith(3)
  })

  it('disables First and Prev buttons on first page', () => {
    const { getByText, getByTestId } = render(
      <PaginationComponent {...props} />,
    )
    const firstPageLink = getByText('1')

    fireEvent.click(firstPageLink)
    const firstBtn = getByTestId('go-first')
    const prevBtn = getByTestId('go-forward')
    expect(props.paginate).toHaveBeenCalledTimes(1)
    expect(firstBtn).toHaveAttribute('disabled')
    expect(prevBtn).toHaveAttribute('disabled')
  })

  it('disables Last and Next buttons on last page', () => {
    const { getByTestId, getByText } = render(
      <PaginationComponent {...props} />,
    )
    const lastPageLink = getByText('10')

    fireEvent.click(lastPageLink)
    const nextBtn = getByTestId('go-next')
    const lastBtn = getByTestId('go-last')

    expect(props.paginate).toHaveBeenCalledTimes(1)
    expect(nextBtn).toHaveAttribute('disabled')
    expect(lastBtn).toHaveAttribute('disabled')
  })

  it('enables all buttons when on a middle page', () => {
    const { getByText, getByTestId } = render(
      <PaginationComponent {...props} />,
    )
    const middlePageLink = getByText('3')

    fireEvent.click(middlePageLink)

    const firstBtn = getByTestId('go-first')
    const prevBtn = getByTestId('go-forward')
    const nextBtn = getByTestId('go-next')
    const lastBtn = getByTestId('go-last')

    expect(props.paginate).toHaveBeenCalledTimes(1)

    expect(firstBtn).not.toBeDisabled()
    expect(prevBtn).not.toBeDisabled()
    expect(nextBtn).not.toBeDisabled()
    expect(lastBtn).not.toBeDisabled()
  })
})
