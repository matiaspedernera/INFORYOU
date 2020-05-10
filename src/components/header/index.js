import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  const itemsTitle = [
    {
      title: "Ultimas Noticias",
      to: "/politica"
    },
    {
      title: "Politica",
      to: "/politica"
    },
    {
      title: "Sociedad",
      to: "/politica"
    },
    {
      title: "Deportes",
      to: "/politica"
    },
    {
      title: "Cultura",
      to: "/politica"
    },
    {
      title: "Policiales",
      to: "/politica"
    },
    {
      title: "Espectaculos",
      to: "/politica"
    },
    {
      title: "Salud",
      to: "/politica"
    },
    {
      title: "COVID-19",
      to: "/politica"
    }
  ]

  return (
    <header className="site-header">
      <img className="site-header__logo" src="./logo/comunicacion.svg" alt="logo" />
      <input type="checkbox" id="btnmenu"></input>
      <label for="btnmenu"><img className="site-header__hamburger-button" src="./logo/menu.svg" alt="menu"></img></label>
      <nav className="site-header__navbar">
        <ul className="site-header__nav-list">
          <Link to="/">
            <li className="site-header__nav-list--item">
              <img className="site-header__nav-list--item__logo" src="./logo/comunicacion.svg" alt="logo" />
            </li>
          </Link>
          {itemsTitle.map(item => (
            <Link className="site-header__nav-list--item__link" to={item.to}>
              <li className="site-header__nav-list--item">{item.title}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header