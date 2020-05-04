import React from 'react';
import Header from './components/header';
import LatestInfo from './components/latest-news';
import NewsTitle from './components/news-title';
import CovidSection from './components/covid-section';
import Politics from './components/politics-section'
import Society from './components/society-section'
import Culture from './components/culture-section'
import Sports from './components/sports-section'
import Health from './components/health-section'
import Police from './components/police-section'
import Show from './components/show-section'
import Footer from './components/footer'



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
        <Sports/>
        <Culture/>
        <Police/>
        <Show/>
        <Health/>
      </div>
      <Footer/>
    </div>  
  );
}

export default App;
