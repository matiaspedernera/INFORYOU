import React from 'react';

function LatestNews(){
    return (
        <div id="latest-news">
        <h1 className="logo">INFOR-YOU</h1>
        <div className="slogan">
          <strong>Todas las noticias que te importan a VOS</strong>
        </div>
        <div className="latest-news">
          <p>Esto paso hoy: Lunes 27 de Abril de 2020</p>
          <h2>Coronavirus: algunas provincias ya permiten el "paseo recreativo"</h2>
          <h3>Se trata de la nueva medida para permitirles a los argentinos el poder salir del confinamiento, al
            menos por una hora y en un radio de 500 metros. Aún así, algunas provincias como Córdoba o Santa Fe, se 
            resisten a esta nueva medida.
          </h3>
          <img src="./img/viernes-de-coronavirus-20200320-928863.jpg" alt="Se permite el paseo recreativo"/>
        </div>
      </div>
    )
}

export default LatestNews