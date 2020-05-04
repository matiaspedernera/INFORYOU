import React from 'react'

const Culture = () => {
  return(
    <section className="culture-section">
      <h3 className="culture-section__title">Cultura</h3>
      <div className="culture-section__news-container">
        <article className="culture-section__news">
          <img className="culture-section__news-picture" src="./img/cultura1.jpg" alt="Alfabetización, matemáticas y lectura: la propuesta de la DGE para la televisión"></img>    
          <h4 className="culture-section__news-title">Alfabetización, matemáticas y lectura: la propuesta de la DGE para la televisión</h4>
        </article>    
        <article className="culture-section__news">
          <img className="culture-section__news-picture" src="./img/cultura2.jpg" alt="Covidiota, coronials, covidengue: cómo impacta la pandemia en las diferentes lenguas"></img>    
          <h4 className="culture-section__news-title">Covidiota, coronials, covidengue: cómo impacta la pandemia en las diferentes lenguas</h4>
        </article>
        <article className="culture-section__news">
          <img className="culture-section__news-picture" src="./img/cultura3.jpg" alt="¿Por qué se conmemora hoy el Día Mundial de la Libertad de Prensa?"></img>    
          <h4 className="culture-section__news-title">¿Por qué se conmemora hoy el Día Mundial de la Libertad de Prensa?</h4>
        </article>
      </div>
    </section>
  )
}

export default Culture