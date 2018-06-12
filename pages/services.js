import React from 'react'
import Head from 'next/head'

import stylesheet from 'styles/index.scss'
import MobileNav from '../components/mobileNav'
import Nav from '../components/navigation'
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

        <div class="services-banner">
          <img src="/static/services-temp.png" alt="" className="img-fluid"/>
          <div className="banner-overlay">
            <h1 className="display-4">HAVE PROBLEMS <span className="banner-line"></span></h1>
          </div>
          <div className="banner-subtitle"><span className="banner-line"></span> 25 YEARS STRONG</div>
        </div>

        <div className="row section services-detail">
          <h1 className="display-5 head2">SOMETHING ABOUT OUR SERVICES</h1>
          <div className="txt-deco">
            <div className="deco-line"></div>
            <div className="deco-label">COPY SUB-SUBTITLES HERE</div>
          </div>

          {/* <div className="r-blob">
            <img src="/static/elements/r-blob.gif" alt=""/>
          </div> */}
          <p>Sitting in court for hours just to pay hefty fees and get ordered into defensive driving is no longer your only option when fighting a traffic ticket.</p>
        </div>

      <div className="footer-info">
        <Footer/>
      </div>
    </div>
  )
};

export default Services;
