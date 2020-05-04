import React from 'react'

function Sports() {
  return(
    <section className="sports-section">
      <h3 className="sports-section_title">Deportes</h3>
      <div className="sports-section_news-container">
        <article className="sports-section_news">
          <img className="sports-section_news-picture" src="./img/deportes1.jpg" alt="Nascar ya tiene fecha confirmada para el regreso"></img>    
          <h4 className="sports-section_news-title">Nascar ya tiene fecha confirmada para el regreso</h4>
        </article>    
        <article className="sports-section_news">
          <img className="sports-section_news-picture" src="./img/deportes2.jpg" alt="Finalmente, River recibirá una sanción imperceptible por no jugar ante Atlético Tucumán"></img>    
          <h4 className="sports-section_news-title">Finalmente, River recibirá una sanción imperceptible por no jugar ante Atlético Tucumán</h4>
        </article>
        <article className="sports-section_news">
          <img className="sports-section_news-picture" src="./img/deportes3.jpg" alt="Por el Día de las Madres: Cristiano Ronaldo sorprendió a Dolores con un costoso regalo"></img>    
          <h4 className="sports-section_news-title">Por el Día de las Madres: Cristiano Ronaldo sorprendió a Dolores con un costoso regalo</h4>
        </article>
      </div>
    </section>
  )
}

export default Sports