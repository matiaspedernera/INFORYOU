import React from 'react'

function Society() {
  return(
    <section className="society-section">
      <h3 className="society-section_title">Sociedad</h3>
      <div className="society-section_news-container">
        <article className="society-section_news">
          <img className="society-section_news-picture" src="./img/sociedad1.jpg" alt="Ahora las limitaciones de la cuarentena varían según el departamento"></img>    
          <h4 className="society-section_news-title">Ahora las limitaciones de la cuarentena varían según el departamento</h4>
        </article>    
        <article className="society-section_news">
          <img className="society-section_news-picture" src="./img/sociedad2.jpg" alt="La semana arrancará con un lindo día otoñal"></img>    
          <h4 className="society-section_news-title">La semana arrancará con un lindo día otoñal</h4>
        </article>
        <article className="society-section_news">
          <img className="society-section_news-picture" src="./img/sociedad3.jpg" alt="Aclaran que el régimen de visitas para hijos de padres separados no es obligatorio"></img>    
          <h4 className="society-section_news-title">Aclaran que el régimen de visitas para hijos de padres separados "no es obligatorio"</h4>
        </article>
      </div>
    </section>
  )
}

export default Society