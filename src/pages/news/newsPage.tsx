import React, { useState, useEffect } from 'react'
import { NewItem as NewsItemType } from '../../interfaces/newItem'
import NewsItem from '../../components/newsItem/newsItem'
import Spinner from 'react-bootstrap/Spinner'
import PaginationComponent from '../../components/pagination/pagination'

import './style.scss'

const NewsPage: React.FC = () => {
  const [news, setNews] = useState<any>()
  const [currentPage, setCurrentPage] = useState<number>(1)

  const itemsPerPage = 10

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('./capi.json')
        const data = await res.json()
        setNews(data)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = news?.results?.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const loaded = !!news?.results?.length

  return (
    <div className="news--page">
      <h3>News List</h3>
      {loaded ? (
        currentItems.map((item: any) => {
          const newsItem: NewsItemType = {
            headline: item.headline.default,
            date: item.date.created,
            standFirst: item.standfirst.default,
            thumbnail:
              item.references[item.related.thumbnail.default[0]].link.media,
            link: item.link.canonical,
          }
          return (
            <NewsItem
              key={item.id}
              newItem={newsItem}
              data-testid={`news-${item.id}`}
            />
          )
        })
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
      {loaded ? (
        <PaginationComponent
          itemsPerPage={itemsPerPage}
          totalItems={news?.results?.length}
          paginate={paginate}
        />
      ) : null}
    </div>
  )
}

export default NewsPage
