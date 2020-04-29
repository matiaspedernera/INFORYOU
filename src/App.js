import React from 'react';
import './styles/style.scss';
import './components/header';
import Header from './components/header';
import LatestNews from './components/latest-news'
import SideInfo from './components/side-info'


function App() {
  return (
    <div className="App">    
      <Header/> 
      <LatestNews/>
      <SideInfo />
    </div>  
  );
}

export default App;
