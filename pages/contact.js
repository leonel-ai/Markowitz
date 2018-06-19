import React from 'react'
import Head from 'next/head'

import stylesheet from 'styles/index.scss'

import MobileNav from '../components/mobileNav'
import Nav from '../components/navigation'
import Footer from '../components/footer'

const Contact = () => {
  return (
    <div className="container-fluid" id="contact-page">
      <Head>
        <title>Contact | Markowitz Law</title>
        <meta name="description" content="TBD"/>
        <meta name="keywords" content="TBD"/>
        <meta name="author" content="Markowitz Law"/>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Head>

      <MobileNav/>
      <Nav/>
      <div id="contact">
        <div className="container contact-header">
          <a href="/"><img src="/static/mlaw.svg" alt="logo" className="img-fluid marko-logo" /></a>
        </div>
      </div>

      <div className="contact-banner">
        <img src="/static/contact-temp.png" alt="" className="img-fluid"/>
        {/* <div className="banner-overlay">
          <h1 className="display-4">HAVE PROBLEMS <span className="banner-line"></span></h1>
        </div> */}
        {/* <div className="banner-subtitle"><span className="banner-line"></span> 25 YEARS STRONG</div> */}
      </div>

      <div className="row section contact-main">
        <div className="col-sm-12 col-md-4 contact-info">
          <ul>
            <li>Markowitz Law</li>
            <li>5610 SW Freeway, Suite 104</li>
            <li>Houston, TX 77057</li>
            <br/>
            <li><a href="tel:713-521-7568">Tel 713-521-7568</a></li>
            <li><a href="mailto:staff@thetrafficticketman.com?subject=Let's talk."><b>staff@thetrafficticketman.com</b></a></li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-8 contact-form">
          <form action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSfMudiGEhtZqJrpY4axY_C4Ubkj52bWKtbZr0WamXB1d1BGSA/formResponse"
                className="clio-intake-form">
            <input type="hidden" name="token" value=""/>
            <input type="hidden" name="utm_campaign"/>

            <label className="f-select">
              <input type="radio" name="entry.2018616690" id="c1" value="Submit Case"/>
              <label htmlFor="c1" className="r-label">&nbsp; Submit Case</label>
              <span className="r-divide">&nbsp;</span>
              <input type="radio" name="entry.2018616690" id="c2" value="Send Message"/>
              <label htmlFor="c2" className="r-label">&nbsp; Send Message</label>
            </label>

            <label>
              <span className="f-label">First *</span>
              <input type="text" name="entry.1601318407" required/>
            </label>

            <label>
              <span className="f-label">Last *</span>
              <input type="text" name="entry.1992502422" required/>
            </label>

            <label>
              <span className="f-label">Email *</span>
              <input type="email" name="emailAddress" required/>
            </label>

            <label>
              <span className="f-label">Phone </span>
              <input type="text" name="entry.789951872" required/>
            </label>

            <label>
              <span className="f-label">Tell us your story *</span>
              <textarea name="entry.1666005408" id="contact-msg" cols="36" rows="8" required></textarea>
            </label>

            <label>
              <span className="f-label">Citation # </span>
              <input type="text" name="entry.236670299"/>
            </label>

            <label>
              <span className="f-label">License # </span>
              <input type="text" name="entry.88074758"/>
            </label>

            <label htmlFor="deadline">
              <span className="f-label">Due Date </span>
              <input type="date" name="entry.371323935" className="f-date"/>
              <div className="f-support">We highly recommend a minimum 72-hr window.</div>
            </label>

            <p>By submitting, you agree to this agreement and there's no way out of it.</p>

            <input type="submit" value="Send" className="f-send"/>
          </form>
        </div>
      </div>

      <div className="row section contact-forms">
        {/* <h1>Let's Get Started</h1>
        <p>Please fill out the form below and we will be in contact shortly.</p> */}

      </div>

    <div className="row section contact-clio">
      <div className="clio-prompt">Already started your case?</div>
      <h4 className="clio-cta">sign into clio</h4>
    </div>

    <div className="row section bookend">
      <div className="col-sm-12 col-md-6">
        <div className="bookend-banner">
          <img src="/static/services-temp.png" alt="" className="img-fluid"/>
        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <div className="bookend-text">
          <div className="bookend-deco">
            <div className="num-line"></div>
            <div className="num-label">NO.</div>
            <div className="num-value">04</div>
          </div>
          <h2>Let's do some business.</h2>
          <a href="/" className="mini-cta"><span className="banner-line"></span>Action if needed</a>
        </div>
      </div>
    </div>

    <div className="footer-info">
      <Footer/>
    </div>

    </div>
  )
};

export default Contact;
