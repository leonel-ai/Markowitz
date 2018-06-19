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
            <a href="/"><img src="/static/mlaw.svg" alt="logo" className="img-fluid marko-logo" /></a>
          </div>
        </div>

        <div className="services-banner">
          <img src="/static/services-temp.png" alt="" className="img-fluid"/>
          <div className="banner-overlay">
            <h1 className="display-4">HAVE A PROBLEM <span className="banner-line"></span></h1>
          </div>
          <div className="banner-subtitle"><span className="banner-line"></span> 25 YEARS STRONG</div>
          <p className="action">Scroll</p>
          <hr/>
        </div>

        <div className="row section services-detail">
            <h1 className="display-5 head2">WE'RE PREPARED TO MEET YOUR NEEDS</h1>
            <div className="col-sm-12 col-md-6">
              <div className="txt-deco">
                <div className="deco-line"></div>
                <div className="deco-label">
                  <a href="/contact">Take the next step</a></div>
              </div>
              <div className="o-blob">
                <img src="/static/elements/o-blob.gif" alt=""/>
              </div>
              <div className="b-blob">
                <img src="/static/elements/b-blob.gif" alt=""/>
              </div>
              <p>With over 25 years of experience in resolving traffic matters, we’ve mastered the art of attaining the results our clients desire. Whether you seek dismissal or a quick resolution, you can rest assured that when you hire Markowitz Law, you minimize the hassle and maximize efficiency.</p>
              <p>No matter the story, we can help.</p>
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
        </div>

        <div className="row section resources-detail">
          <div className="res-info">
            <div className="num-line"></div>
            <div className="num-label">RESOURCES</div>
          </div>

          <h3 className="display-5 head2">Helping you every step of the way</h3>
          <div className="txt-deco">
            <div className="deco-line"></div>
            <div className="deco-label">
              <a href="/contact">Get in touch</a>
            </div>
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
