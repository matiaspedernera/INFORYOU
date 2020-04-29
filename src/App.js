import React from 'react';
import './styles/style.scss';
import './styles/components/header';
import Header from './styles/components/header';
import LatestNews from './styles/components/latest-news'
import SideInfo from './styles/components/side-info'


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
