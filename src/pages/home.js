import React from 'react';
import Layout from '../components/layout';
import LatestInfo from '../components/latest-news';
import NewsTitle from '../components/news-title';
import CovidSection from '../components/covid-section';
import NewsSection from '../components/news-section';
import './home.scss'


const Home = () => {
  return (
    <Layout>
      <NewsTitle />
      <LatestInfo />
      <CovidSection />
      <NewsSection />
    </Layout>
  );
}

export default Home;
