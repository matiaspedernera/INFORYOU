import React from 'react';
import Header from './components/header';
import LatestInfo from './components/latest-news'
import NewsTitle from './components/news-title'
import CovidSection from './components/covid-section'


function App() {
  return (
    <div className="App">    
      <Header/>
      <div className="content-container"> 
        <NewsTitle />
        <LatestInfo/>
      </div>
    </div>  
  );
}

export default App;
