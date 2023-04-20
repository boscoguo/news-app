import { render } from '@testing-library/react'
import RawHTML from './rawHtml'

describe('RawHTML', () => {
  it('renders the raw HTML content', () => {
    const rawContent = '<p>This is a <strong>test</strong>.</p>'
    const { getByText } = render(<RawHTML rawContent={rawContent} />)
    const paragraphElement = getByText('This is a test.')
    expect(paragraphElement).toBeInTheDocument()
    expect(paragraphElement.tagName).toBe('P')
    expect(paragraphElement.innerHTML).toBe('This is a test.')
  })
})
