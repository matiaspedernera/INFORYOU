import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/comentarios">
        <img className="footer__logo" src="./logo/comunicaciones.svg" alt="logo"></img>
      </Link>
      <p className="footer__title">INFOR-YOU</p>
      <div className="footer__social-networks">
        <img className="footer__social-networks-logo" src="./logo/twitter.svg" alt="twitter"></img>
        <img className="footer__social-networks-logo" src="./logo/facebook.svg" alt="facebook"></img>
        <img className="footer__social-networks-logo" src="./logo/youtube.svg" alt="youtube"></img>
        <img className="footer__social-networks-logo" src="./logo/instagram.svg" alt="instagram"></img>
      </div>
    </footer>
  )
}

export default Footer