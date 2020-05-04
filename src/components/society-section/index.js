import React from 'react'

const Society = () => {
  return(
    <section className="society-section">
      <h3 className="society-section__title">Sociedad</h3>
      <div className="society-section__news-container">
        <article className="society-section__news">
          <img className="society-section__news-picture" src="./img/sociedad1.jpg" alt="Ahora las limitaciones de la cuarentena varían según el departamento"></img>    
          <h4 className="society-section__news-title">Ahora las limitaciones de la cuarentena varían según el departamento</h4>
        </article>    
        <article className="society-section__news">
          <img className="society-section__news-picture" src="./img/sociedad2.jpg" alt="La semana arrancará con un lindo día otoñal"></img>    
          <h4 className="society-section__news-title">La semana arrancará con un lindo día otoñal</h4>
        </article>
        <article className="society-section__news">
          <img className="society-section__news-picture" src="./img/sociedad3.jpg" alt="Aclaran que el régimen de visitas para hijos de padres separados no es obligatorio"></img>    
          <h4 className="society-section__news-title">Aclaran que el régimen de visitas para hijos de padres separados "no es obligatorio"</h4>
        </article>
      </div>
    </section>
  )
}

export default Society