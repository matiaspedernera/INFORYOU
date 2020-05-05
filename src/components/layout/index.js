import React from 'react';
import LatestInfo from './latest-news';
import NewsTitle from './news-title';
import CovidSection from './covid-section';
import Politics from './politics-section';
import Society from './society-section';
import Culture from './culture-section';
import Sports from './sports-section';
import Health from './health-section';
import Police from './police-section';
import Show from './show-section';



const Layout = () => {
  const listCultureNews = [
    {title: "Alfabetización, matemáticas y lectura: la propuesta de la DGE para la televisión",
      src: "./img/cultura1.jpg",
      alt: "Alfabetización, matemáticas y lectura: la propuesta de la DGE para la televisión"},
      {title: "Covidiota, coronials, covidengue: cómo impacta la pandemia en las diferentes lenguas",
      src: "./img/cultura2.jpg",
      alt: "Covidiota, coronials, covidengue: cómo impacta la pandemia en las diferentes lenguas"},
      {title: "¿Por qué se conmemora hoy el Día Mundial de la Libertad de Prensa?",
      src: "./img/cultura3.jpg",
      alt: "¿Por qué se conmemora hoy el Día Mundial de la Libertad de Prensa?"}
  ];

  return(
    <div className="content-container">
      <NewsTitle />
      <LatestInfo/>
      <CovidSection/>
      <Politics/>
      <Society/>
      <Sports/>
      <Culture items={listCultureNews} title="Cultura"/>
      <Police/>
      <Show/>
      <Health/>
    </div>
  )
}

export default Layout