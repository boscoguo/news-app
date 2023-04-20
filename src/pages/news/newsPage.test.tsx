import React from 'react'
import { render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import NewsPage from './newsPage'

describe('NewsPage', () => {
  it('fetch data on mount and update the state', async () => {
    const mockNewsData = {
      results: [
        {
          id: 1,
          headline: {
            default: 'Breaking News',
          },
          date: {
            created: '2022-04-20T10:12:00.000Z',
          },
          standfirst: {
            default: 'This is a breaking news story.',
          },
          related: {
            thumbnail: {
              default: [2],
            },
          },
          references: [
            {
              id: 2,
              type: 'media',
              link: {
                media: 'https://example.com/image.jpg',
              },
            },
          ],
          link: {
            canonical: 'https://example.com/news/1',
          },
        },
      ],
    }
    jest.spyOn(window, 'fetch').mockRejectedValueOnce({
      json: async () => mockNewsData,
    })
    const { getByText } = render(<NewsPage />)
    expect(getByText('News List')).toBeInTheDocument()
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1))
    expect(fetch).toHaveBeenCalledWith('./capi.json')
  })
})
