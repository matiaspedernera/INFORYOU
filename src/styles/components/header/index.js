import React from 'react';

function Header(){
    return(
        <header className="site-header">
        <ul className="nav-list">
            <a className="nav-list-item" href="#latest-news">
              <li>Ultimas Noticias</li>
            </a>
            <a className="nav-list-item" href="#Politica">
              <li >Política</li>
            </a>
            <a className="nav-list-item" href="#Sociedad">
              <li >Sociedad</li>
            </a>
            <a className="nav-list-item" href="#Deportes">
              <li >Deportes</li>
            </a>
            <a className="nav-list-item" href="#Cultura">
              <li >Cultura</li>
            </a>
            <a className="nav-list-item" href="#Policiales">
              <li >Policiales</li>
            </a>
            <a className="nav-list-item" href="#Espectaculo">
              <li >Espectaculo</li>
            </a>
            <a className="nav-list-item" href="#Salud">
              <li >Salud</li>
            </a>
            <a className="nav-list-item" href="#Covid19">
              <li>COVID-19</li>
            </a>
          </ul>
      </header>
    )
}

export default Header