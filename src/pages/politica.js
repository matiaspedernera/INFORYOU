import React, { useState, useEffect } from 'react';
import mockNews from '../mocks/mockNews.json'
import Layout from '../components/layout';

const Politica = () => {

  useEffect(() => {
    callFetch()
  }, [])

  const [news, setNews] = useState([])

  const callFetch = async () => {
    const ApiKey = 'f39c6e3e92604f609e14676b166e37e3'
    const data = await fetch(`http://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=${ApiKey}`)
    const news = await data.json()
    console.log(news.articles)
    setNews(news.articles)
  }

  /* const news = mockNews */

  return (
    <Layout>
      <h1>Politica</h1>
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


export default Politica