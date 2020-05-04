import React from 'react';

function CovidSection(){
  return(
    <section className="covid-section">
      <h3 className="covid-section_title">COVID-19 hoy</h3>
      <iframe className="covid-section_graphic" title="COVID-19" src="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6" frameborder ="0"></iframe> 
    </section>
  )
}

export default CovidSection