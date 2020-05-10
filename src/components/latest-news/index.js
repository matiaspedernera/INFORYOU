import React from 'react';

const LatestInfo = () => {
  return (
    <section className="latest-info">
      <h2 className="latest-info__title">Esto pasa hoy: Lunes 4 de Mayo de 2020</h2>
      <article className="latest-info__news">
        <h3 className="latest_info__news-title">Coronavirus: algunas provincias ya permiten el "paseo recreativo"</h3>
        <p className="latest-info__news-paragraph">Se trata de la nueva medida para permitirles a los argentinos el poder salir del confinamiento, al
        menos por una hora y en un radio de 500 metros. Aún así, algunas provincias como Córdoba o Santa Fe, se
        resisten a esta nueva medida.
          </p>
        <img className="latest-info__news-picture" src="./img/viernes-de-coronavirus-20200320-928863.jpg" alt="Se permite el paseo recreativo" />
      </article>
      <aside className="latest-info__aside">
        <h3 className="latest-info__aside-weather-title">Pronóstico para hoy: </h3>
        <img className="latest-info__aside-weather" src="./img/widget-clima-realista_1284-4092.jpg" alt="El clima de hoy" />
        <h3 className="latest-info__aside-dolar-title">Dólar hoy:</h3>
        <img className="latest-info__aside-dolar" src="./img/dolar.jpg" alt="Dolar hoy" />
      </aside>
    </section>
  )
}

export default LatestInfo