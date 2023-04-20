import React, { useState, useEffect } from 'react'
import { NewItem as NewsItemType } from '../../interfaces/newItem'
import NewsItem from '../../components/newsItem/newsItem'
import Spinner from 'react-bootstrap/Spinner'
import PaginationComponent from '../../components/pagination/pagination'

const NewsPage: React.FC = () => {
  const [news, setNews] = useState<any>()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('./capi.json')
      const data = await res.json()
      setNews(data)
    }
    fetchData()
  }, [])
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = news?.results?.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      {news ? (
        currentItems.map((item: any) => {
          const newsItem: NewsItemType = {
            headline: item.headline.default,
            date: item.date.created,
            standFirst: item.standfirst.default,
            thumbnail:
              item.references[item.related.thumbnail.default[0]].link.media,
            link: item.link.canonical,
          }
          return <NewsItem key={item.id} newItem={newsItem} />
        })
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
      <PaginationComponent
        itemsPerPage={itemsPerPage}
        totalItems={news?.results?.length}
        paginate={paginate}
      />
    </>
  )
}

export default NewsPage
