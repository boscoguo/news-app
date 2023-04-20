import React, { useState, useEffect } from 'react'
import { NewItem as NewsItemType } from '../../interfaces/newItem'
import NewsItem from '../../components/newsItem/newsItem'
import Spinner from 'react-bootstrap/Spinner'

const NewsPage: React.FC = () => {
  const [news, setNews] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('./capi.json')
      const data = await res.json()
      setNews(data)
    }
    fetchData()
  }, [])

  return (
    <>
      {news ? (
        news.results.map((item: any) => {
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
    </>
  )
}

export default NewsPage
