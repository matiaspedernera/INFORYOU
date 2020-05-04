import React from 'react'

const Politics = () => {
  return(
    <section className="politics-section">
      <h3 className="politics-section__title">Política</h3>
      <div className="politics-section__news-container">
        <article className="politics-section__news">
          <img className="politics-section__news-picture" src="./img/politicas1.jpg" alt="Barbijos vencidos"></img>    
          <h4 className="politics-section__news-title">Confirmaron que los 1.600 barbijos que compró 
            el gobierno de la Ciudad de Buenos Aires
            estaban vencidos desde hace cuatro años</h4>
        </article>    
        <article className="politics-section__news">
          <img className="politics-section__news-picture" src="./img/politicas2.jpg" alt="Comision analiza flexibizar cuarentena en la Justicia"></img>    
          <h4 className="politics-section__news-title">Una comisión analizará si se puede flexibilizar 
            la cuarentena en la Justicia</h4>
        </article>
        <article className="politics-section__news">
          <img className="politics-section__news-picture" src="./img/politicas3.jpg" alt="La reforma de la Constitución demorará al menos dos años"></img>    
          <h4 className="politics-section__news-title">La reforma de la Constitución demorará al menos dos años</h4>
        </article>
      </div>
    </section>
  )
}

export default Politics