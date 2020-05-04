import React from 'react';


const SideInfo = () =>{
    return(
        <aside className="side-info">
          <p className = "pClima">Pronóstico para hoy: </p>
          <img className="clima" src="./img/widget-clima-realista_1284-4092.jpg" alt="El clima de hoy"/>
          <p className="pDolar">Dólar hoy:</p>
          <img className="dolar" src="./img/Annotation 2020-04-27 222808.jpg" alt="Dolar hoy"/>
        </aside>
    )
}

export default SideInfo