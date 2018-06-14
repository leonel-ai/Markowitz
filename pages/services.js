import React from 'react'
import Head from 'next/head'

import stylesheet from 'styles/index.scss'
import MobileNav from '../components/mobileNav'
import Nav from '../components/navigation'
import Resources from '../components/resources'
import FAQ from '../components/faq'
import Footer from '../components/footer'


const Services = () => {
  return (
    <div className="container-fluid" id="services-page">
      <Head>
        <title>Services | Markowitz Law</title>
        <meta name="description" content="TBD"/>
        <meta name="keywords" content="TBD"/>
        <meta name="author" content="Markowitz Law"/>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Head>

      <MobileNav/>
      <Nav/>
        <div id="services">
          <div className="container services-header">
            <img src="/static/mlaw.svg" alt="logo" className="img-fluid marko-logo" />
          </div>
        </div>

        <div className="services-banner">
          <img src="/static/services-temp.png" alt="" className="img-fluid"/>
          <div className="banner-overlay">
            <h1 className="display-4">HAVE PROBLEMS <span className="banner-line"></span></h1>
          </div>
          <div className="banner-subtitle"><span className="banner-line"></span> 25 YEARS STRONG</div>
          <p className="action">Scroll</p>
          <hr/>
        </div>

        <div className="row section services-detail">
            <h1 className="display-5 head2">SOMETHING ABOUT OUR SERVICES</h1>
            <div className="col-sm-12 col-md-6">
              <div className="txt-deco">
                <div className="deco-line"></div>
                <div className="deco-label">LINK TO START CASE</div>
              </div>
              <div className="o-blob">
                <img src="/static/elements/o-blob.gif" alt=""/>
              </div>
              <div className="b-blob">
                <img src="/static/elements/b-blob.gif" alt=""/>
              </div>
              <p>Sitting in court for hours just to pay hefty fees and getasdfasdfasdfasdf fasdfthrthwgvsnb fgdfhrt erg s df sfgs gsa fga gafg saf asdfasdfasdf asd fasdfadfadsfasd df ads fs  ordered into defensive driving is no longer your only option when fighting a traffic ticket.</p>
              <p>Sitting in court for hours just to pay hefty five asdfas defensive asdfasdf is no longer y no longer your only option when fighting a traffic ticket.</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <h4>Services</h4>
              <ul>
                <li>Traffic Ticket and Criminal Defense</li>
                <li>DWI and License Revocation</li>
                <li>Failure to Appear and Bonding</li>
                <li>Occupational Driver's License</li>
                <li>Expunction and Non-Disclosure of Records</li>
              </ul>
          </div>
        </div>

        <div className="container questions-grid">
          <FAQ/>
          <div className="row faq-contact"><h5><span className="banner-line"></span>Get in touch</h5></div>
        </div>

        <div className="resources-banner">
          <img src="/static/services-temp.png" alt="" className="img-fluid"/>
        </div>

        <div className="row section resources-detail">
          <div className="res-info">
            <div className="num-line"></div>
            <div className="num-label">NO.</div>
            <div className="num-value">03</div>
          </div>

          <h3 className="display-5 head2">SOMETHING ABOUT RESOURCES</h3>
          <div className="txt-deco">
            <div className="deco-line"></div>
            <div className="deco-label">LINK TO CONTACT FORM</div>
          </div>
          <Resources/>
        </div>

      <div className="footer-info">
        <Footer/>
      </div>
    </div>
  )
};

export default Services;
