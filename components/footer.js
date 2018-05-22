import React from 'react';

import stylesheet from 'styles/index.scss'

const Footer = () => {
  return (
    <div id="footer" className="container-fluid">
      <h5 className="text-muted">Markowitz Law</h5>
      <h5 className="text-muted">Proudly headquartered in Houston, TX</h5>
      <hr className="footer-line"/>
      <ul className="footer-socials">
        <li className="footer-social"><a href="https://www.facebook.com/HighwayLawyers/" target="_blank">facebook</a></li>
        <li className="footer-social"><a href="https://www.linkedin.com/in/scott-markowitz-7a5a805" target="_blank">linkedin</a></li>
        <li className="footer-social"><a href="https://www.yelp.com/biz/markowitz-law-firm-houston" target="_blank">yelp</a></li>
        <li className="footer-social"><a href="https://www.avvo.com/attorneys/77057-tx-scott-markowitz-204768/write_review.html" target="_blank">avvo</a></li>
        <li className="footer-social"><a className="footer-copyright" href="http://amagazi.com" target="_blank">©2018 amagazi</a></li>
      </ul>
    </div>
  )
}

export default Footer
