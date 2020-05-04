import React from 'react'

const Show = () => {
  return(
    <section className="show-section">
      <h3 className="show-section__title">Show</h3>
      <div className="show-section__news-container">
        <article className="show-section__news">
          <img className="show-section__news-picture" src="./img/show1.jpg" alt="La emoción de Juana Viale al recordar a Goldie Legrand: “Es difícil no poder abrazar”"></img>    
          <h4 className="show-section__news-title">La emoción de Juana Viale al recordar a Goldie Legrand: “Es difícil no poder abrazar”</h4>
        </article>    
        <article className="show-section__news">
          <img className="show-section__news-picture" src="./img/show2.jpg" alt="Murió el actor de Juego de tronos, B.J. Hogg"></img>    
          <h4 className="show-section__news-title">Murió el actor de Juego de tronos, B.J. Hogg</h4>
        </article>
        <article className="show-section__news">
          <img className="show-section__news-picture" src="./img/show3.jpg" alt="Mike Amigorena: Reinventarse en la tele y el teatro es muy difícil"></img>    
          <h4 className="show-section__news-title">Mike Amigorena: "Reinventarse en la tele y el teatro es muy difícil"</h4>
        </article>
      </div>
    </section>
  )
}

export default Show