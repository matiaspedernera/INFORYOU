import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import newsFetched from '../services/news/index'

const LatestNews = () => {


  const [news, setNews] = useState([])

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    const articles = await newsFetched()
    setNews(articles)
  }

  return (
    <Layout>
      <h1>Ultimas Noticias</h1>
      <div>
        {news.map(article => (
          <article key={article.url}>
            <img src={article.urlToImage} alt={article.title} />
            <h4 >{article.title}</h4>
          </article>
        ))}
      </div>
    </Layout>
  )
}


export default LatestNews