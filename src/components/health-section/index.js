import React from 'react'

function Health() {
  return(
    <section className="health-section">
      <h3 className="health-section_title">Salud</h3>
      <div className="health-section_news-container">
        <article className="health-section_news">
          <img className="health-section_news-picture" src="./img/salud1.jpg" alt="Sarampión: una enfermedad para la que sí hay vacuna"></img>    
          <h4 className="health-section_news-title">Sarampión: una enfermedad para la que sí hay vacuna</h4>
        </article>    
        <article className="health-section_news">
          <img className="health-section_news-picture" src="./img/salud2.jpg" alt="La importancia de la teleconsulta en épocas de Covid-19"></img>    
          <h4 className="health-section_news-title">La importancia de la teleconsulta en épocas de Covid-19</h4>
        </article>
        <article className="health-section_news">
          <img className="health-section_news-picture" src="./img/salud3.jpg" alt="Instituciones advierten que hay enfermedades que no pueden esperar"></img>    
          <h4 className="health-section_news-title">Instituciones advierten que hay enfermedades que no pueden esperar</h4>
        </article>
      </div>
    </section>
  )
}

export default Health