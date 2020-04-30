import React from 'react';

function Header(){
    return(
        <header className="site-header">
          <ul className="site-header__nav-list">
            <li className="site-header__nav-list--item">
              <img className="site-header__nav-list--item__logo" src="./logo/comunicacion.svg" alt="logo"/> 
            </li>
            <li className="site-header__nav-list--item">
              <a className="site-header__nav-list--item__link" href="#latest-news">Ultimas noticias</a>
            </li>
            <li className="site-header__nav-list--item">
              <a className="site-header__nav-list--item__link" href="#Politica">Politica</a>
            </li>
            <li className="site-header__nav-list--item">
              <a className="site-header__nav-list--item__link" href="#Sociedad">Sociedad</a>
            </li>
            <li className="site-header__nav-list--item">
              <a className="site-header__nav-list--item__link" href="#Deportes">Deportes</a>
            </li>
            <li className="site-header__nav-list--item">
              <a className="site-header__nav-list--item__link" href="#Cultura">Cultura</a>
            </li>
            <li className="site-header__nav-list--item">
              <a className="site-header__nav-list--item__link" href="#Policiales">Policiales</a>
            </li>
            <li className="site-header__nav-list--item">
              <a className="site-header__nav-list--item__link" href="#Espectaculos">Espectaculos</a>
            </li>
            <li className="site-header__nav-list--item">
              <a className="site-header__nav-list--item__link" href="#Salud">Salud</a>
            </li>
            <li className="site-header__nav-list--item">
              <a className="site-header__nav-list--item__link" href="#COVID-19">COVID-19</a>
            </li>
            {/* <a className="nav-list__item" href="#Covid19">
              <li>COVID-19</li>
            </a> */}
          </ul>
      </header>
    )
}

export default Header