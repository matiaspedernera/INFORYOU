import React from 'react';
import Header from './components/header';
import LatestInfo from './components/latest-news';
import NewsTitle from './components/news-title';
import CovidSection from './components/covid-section';
import Politics from './components/politics-section'
import Society from './components/society-section'


function App() {
  return (
    <div className="App">    
      <Header/>
      <div className="content-container"> 
        <NewsTitle />
        <LatestInfo/>
        <CovidSection/>
        <Politics/>
        <Society/>
      </div>
    </div>  
  );
}

export default App;
