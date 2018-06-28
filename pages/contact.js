import React from 'react'
import Head from 'next/head'
import Fade from 'react-reveal/Fade'

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

      <Fade bottom delay={500}>
      <div id="contact">
        <div className="container contact-header">
          <a href="/"><img src="/static/mlaw.svg" alt="logo" className="img-fluid marko-logo" /></a>
        </div>
      </div>
      </Fade>

      <div className="contact-banner">
      <Fade bottom delay={500}>
        <div className="banner-overlay">
          <div>We're just 05 minutes away from the <span className="nearby"> GALLERIA</span></div>
        </div>
      </Fade>
      <Fade bottom delay={500}>
        <img src="/static/get_started.svg" alt="" className="img-fluid"/>
      </Fade>
      </div>

      <div className="row section contact-main">
      <Fade bottom delay={500}>
        <div className="col-sm-12 col-md-4 col-lg-12 contact-info">
          <ul>
            <li>Markowitz Law</li>
            <a href="https://www.google.com/maps/search/?api=1&query=Markowitz+Law+Firm" target="_blank">
            <li>5610 SW Freeway, Suite 104</li>
            <li>Houston, TX 77057</li>
          </a>
            <br/>
            <li>Tel<a href="tel:713-521-7568"> 713-521-7568</a></li>
            <li><a href="mailto:staff@thetrafficticketman.com?subject=Let's talk."><b>staff@thetrafficticketman.com</b></a></li>
          </ul>
        </div>
      </Fade>
        <div className="col-sm-12 col-md-10 col-lg-6 contact-form">
          <form action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSfMudiGEhtZqJrpY4axY_C4Ubkj52bWKtbZr0WamXB1d1BGSA/formResponse"
                className="clio-intake-form">
            <input type="hidden" name="token" value=""/>
            <input type="hidden" name="utm_campaign"/>

          <Fade bottom>
            <label className="f-select">
              <h5>Please select one of the following:</h5>
              <input type="radio" name="entry.2018616690" id="c1" value="Submit Case"/>
              <label htmlFor="c1" className="r-label">&nbsp; Submit Case</label>
              <span className="r-divide">&nbsp;</span>
              <input type="radio" name="entry.2018616690" id="c2" value="Send Message"/>
              <label htmlFor="c2" className="r-label">&nbsp; Send Message</label>
            </label>
            </Fade>

          <Fade bottom>
            <label className="col-md-5 split">
              <span className="f-label">First *</span>
              <input type="text" name="entry.1601318407" required/>
            </label>
          </Fade>

          <Fade bottom>
            <label className="col-md-5 offset-md-2 split">
              <span className="f-label">Last *</span>
              <input type="text" name="entry.1992502422" required/>
            </label>
          </Fade>

         <Fade bottom>
            <label className="col-md-5 split">
              <span className="f-label">Email *</span>
              <input type="email" name="emailAddress" required/>
            </label>
          </Fade>

         <Fade bottom>
            <label className="col-md-5 offset-md-2 split">
              <span className="f-label">Phone </span>
              <input type="text" name="entry.789951872" required/>
            </label>
          </Fade>

         <Fade bottom>
            <label>
              <span className="f-label">Tell us your story *</span>
              <textarea name="entry.1666005408" id="contact-msg" cols="36" rows="8" required></textarea>
            </label>
          </Fade>

         <Fade bottom>
            <label className="col-md-5 split">
              <span className="f-label">Citation # </span>
              <input type="text" name="entry.236670299"/>
            </label>
          </Fade>

         <Fade bottom>
            <label className="col-md-5 offset-md-2 split">
              <span className="f-label">License # </span>
              <input type="text" name="entry.88074758"/>
            </label>
          </Fade>

         <Fade bottom>
            <label htmlFor="deadline" className="col-md-10 offset-md-1">
              <span className="f-label">Due Date </span>
              <input type="date" name="entry.371323935" className="f-date"/>
              <div className="f-support">Minimum 72-hr window for upcoming court dates. Missed court? We can still help.</div>
            </label>
          </Fade>

         <Fade bottom delay={500}>
            <p>Using this form does not establish an attorney-client relationship.
              Please refrain from sending confidential or time-sensitive information.
            </p>

            <input type="submit" value="Send" className="f-send"/>
          </Fade>
          </form>
        </div>
        <div className="contact-clio-desktop col-lg-4">
          <div className="clio-signin">
          <Fade bottom delay={500}>
            <div className="clio-case">Already have a case?</div>
            <h4><a href="https://app.clio.com/session/new" target="_blank">Sign In to Clio Connect</a></h4>
          </Fade>
          </div>
          <Fade bottom delay={500}>
          <div className="g-blob">
            <img src="/static/elements/g-blob.gif" alt=""/>
          </div>
          </Fade>
          <Fade bottom delay={500}>
          <div className="y-blob">
            <img src="/static/elements/y-blob.gif" alt=""/>
          </div>
          </Fade>
          <Fade bottom delay={550}>
          <div className="r-blob">
            <img src="/static/elements/r-blob.gif" alt=""/>
          </div>
          </Fade>
        </div>
      </div>

    <div className="row section contact-clio">
        <div className="clio-signin col-lg-4 order-lg-1">
        <Fade bottom delay={500}>
          <div className="clio-case">Already have a case?</div>
          <h4><a href="https://app.clio.com/session/new" target="_blank">Sign In to Clio Connect</a></h4>
        </Fade>
        <Fade bottom delay={500}>
        <div className="y-blob">
          <img src="/static/elements/y-blob.gif" alt=""/>
        </div>
        </Fade>
        <Fade bottom delay={500}>
        <div className="b-blob">
          <img src="/static/elements/b-blob.gif" alt=""/>
        </div>
        </Fade>
        </div>
    </div>

    <div className="footer-info">
      <Footer/>
    </div>

    </div>
  )
};

export default Contact;
