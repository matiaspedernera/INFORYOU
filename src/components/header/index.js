import React from 'react';

const Header = () => {
    return(
        <header className="site-header">
          <img className="site-header__logo" src="./logo/comunicacion.svg" alt="logo"/> 
          <input type="checkbox" id="btnmenu"></input>   
          <label for="btnmenu"><img className="site-header__hamburger-button" src="./logo/menu.svg" alt="menu"></img></label>
          <nav className="site-header__navbar">
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
            </ul>
          </nav>  
      </header>
    )
}

export default Header