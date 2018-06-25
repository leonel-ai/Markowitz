import React from 'react';
import Fade from 'react-reveal/Fade'
import stylesheet from 'styles/index.scss'

const Footer = () => {
  return (
    <div id="footer" className="container-fluid">
    <Fade bottom delay={400}>
      <h5 className="text-muted info">Markowitz Law</h5>
      <h5 className="text-muted info">Proudly headquartered in Houston, TX</h5>
      <hr className="footer-line"/>
      <ul className="footer-socials">
        <li className="footer-social"><a href="https://www.facebook.com/HighwayLawyers/" target="_blank">facebook</a></li>
        <li className="footer-social"><a href="https://www.linkedin.com/in/scott-markowitz-7a5a805" target="_blank">linkedin</a></li>
        <li className="footer-social"><a href="https://www.yelp.com/biz/markowitz-law-firm-houston" target="_blank">yelp</a></li>
        <li className="footer-social"><a href="https://www.avvo.com/attorneys/77057-tx-scott-markowitz-204768/write_review.html" target="_blank">avvo</a></li>
      </ul>
    </Fade>
    </div>
  )
}

export default Footer
