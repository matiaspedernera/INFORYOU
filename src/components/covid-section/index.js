import React from 'react';

const CovidSection = () => {
  return (
    <section className="covid-section">
      <h3 className="covid-section__title">COVID-19 hoy</h3>
      <iframe className="covid-section__graphic" title="COVID-19" src="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" frameborder="0"></iframe>
    </section>
  )
}

export default CovidSection