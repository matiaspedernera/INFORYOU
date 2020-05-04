import React from 'react'

function Footer() {
  return(
    <footer className="footer">
      <img className="footer_logo" src="./logo/comunicacion.svg" alt="logo"></img>
      <p className="footer_title">INFOR-YOU</p>
      <div className="footer_social-networks">
        <img className="footer_social-networks-logo" src="./logo/twitter.svg" alt="twitter"></img>
        <img className="footer_social-networks-logo" src="./logo/facebook.svg" alt="facebook"></img>
        <img className="footer_social-networks-logo" src="./logo/youtube.svg" alt="youtube"></img>
        <img className="footer_social-networks-logo" src="./logo/instagram.svg" alt="instagram"></img>
      </div>
    </footer>
  )
}

export default Footer