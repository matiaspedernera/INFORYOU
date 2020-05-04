import React from 'react'

function Police() {
  return(
    <section className="police-section">
      <h3 className="police-section_title">Policiales</h3>
      <div className="police-section_news-container">
        <article className="police-section_news">
          <img className="police-section_news-picture" src="./img/policiales1.jpg" alt="Una mujer esquizofrénica convivió con el cadáver de su madre durante cuatro días"></img>    
          <h4 className="police-section_news-title">Una mujer esquizofrénica convivió con el cadáver de su madre durante cuatro días</h4>
        </article>    
        <article className="police-section_news">
          <img className="police-section_news-picture" src="./img/policiales2.jpg" alt="Una mujer apuñaló a su vecina embarazada en San Martín tras una discusión"></img>    
          <h4 className="police-section_news-title">Una mujer apuñaló a su vecina embarazada en San Martín tras una discusión</h4>
        </article>
        <article className="police-section_news">
          <img className="police-section_news-picture" src="./img/policiales3.jpg" alt="Investigan la muerte de una joven que fue llevada al hospital Lencinas"></img>    
          <h4 className="police-section_news-title">Investigan la muerte de una joven que fue llevada al hospital Lencinas</h4>
        </article>
      </div>
    </section>
  )
}

export default Police