import React from 'react';
import './styles/style.scss';
import './components/header';
import Header from './components/header';
import LatestInfo from './components/latest-news'
/* import SideInfo from './components/side-info' */
import NewsTitle from './components/news-title'


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
