import mockNews from './mockNews.json';

const ApiKey = 'f39c6e3e92604f609e14676b166e37e3'

const callFetch = async () => {
    const data = await fetch(`http://newsapi.org/v2/top-headlines?sources=google-news-ar&apiKey=${ApiKey}`)
    const news = await data.json()
    return news.articles
}

const newsFetched = () => {
    console.log(process.env.REACT_APP_MOCK,process.env)

    return process.env.REACT_APP_MOCK === "true" ? mockNews : callFetch()  
}

export default newsFetched