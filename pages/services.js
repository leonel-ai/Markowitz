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
          <div className="txt-deco">
            <div className="deco-line"></div>
            <div className="deco-label">LINK TO START CASE</div>
          </div>

          <div className="o-blob">
            <img src="/static/elements/o-blob.gif" alt=""/>
          </div>
          <p>Sitting in court for hours just to pay hefty fees and get ordered into defensive driving is no longer your only option when fighting a traffic ticket.</p>
          <p>Sitting in court for hours just to pay hefty fees and get ordered into defensive driving is no longer your only option when fighting a traffic ticket.</p>
        </div>

        <div className="container questions-grid">
          <div className="row">
            <div className="faq col-sm">
              <h5>Time Responsible</h5>
              <div className="faq-line"></div>
              <h4>What about insurance rates tho?</h4></div>
            <div className="faq col-sm">
              <h5>Business Oriented</h5>
              <div className="faq-line"></div>
              <h4>Da fuq is an escort service?</h4></div>
            <div className="faq col-sm">
              <h5>Solution Driven</h5>
              <div className="faq-line"></div>
              <h4>How much does this cost me?</h4></div>
            <div className="faq col-sm">
              <h5>Multiplatform</h5>
              <div className="faq-line"></div>
              <h4>Who is Clio? Who is she?</h4></div>
            <div className="faq col-sm">
              <h5>Human Centered</h5>
              <div className="faq-line"></div>
              <h4>Why should I even?</h4></div>
          </div>
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
        </div>

      <div className="footer-info">
        <Footer/>
      </div>
    </div>
  )
};

export default Services;
