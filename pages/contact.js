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
          <img src="/static/mlaw.svg" alt="logo" className="img-fluid marko-logo" />
        </div>
      </div>

      <div className="contact-banner">
        <img src="/static/services-temp.png" alt="" className="img-fluid"/>
        <div className="banner-overlay">
          <h1 className="display-4">HAVE PROBLEMS <span className="banner-line"></span></h1>
        </div>
        <div className="banner-subtitle"><span className="banner-line"></span> 25 YEARS STRONG</div>
        <p className="action">Scroll</p>
        <hr/>
      </div>

      <div className="row section contact-forms">
        <h1>Let's Get Started</h1>
        <p>Please fill out the form below and we will be in contact shortly.</p>
        <form action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSfMudiGEhtZqJrpY4axY_C4Ubkj52bWKtbZr0WamXB1d1BGSA/formResponse"
              className="clio-intake-form">
          <input type="hidden" name="token" value=""/>
          <input type="hidden" name="utm_campaign"/>

          <label>
            <span>Reason </span>
            <input type="radio" name="entry.2018616690" id="c1" value="Submit Case"/>
            <label htmlFor="c1">&nbsp; Submit Case</label>
            &nbsp;
            <input type="radio" name="entry.2018616690" id="c2" value="Send Message"/>
            <label htmlFor="c2">&nbsp; Send Message</label>
          </label>

          <label>
            <span>First </span>
            <input type="text" name="entry.1601318407" required/>
          </label>

          <label>
            <span>Last </span>
            <input type="text" name="entry.1992502422" required/>
          </label>

          <label>
            <span>Email </span>
            <input type="email" name="emailAddress" required/>
          </label>

          <label>
            <span>Phone </span>
            <input type="text" name="entry.789951872" required/>
          </label>

          <label>
            <span>Tell us your story </span>
            <textarea name="entry.1666005408" id="contact-msg" cols="36" rows="4" required></textarea>
          </label>

          <label>
            <span>Citation # </span>
            <input type="text" name="entry.236670299"/>
          </label>

           <label>
            <span>License # </span>
            <input type="text" name="entry.88074758"/>
          </label>

          <label htmlFor="deadline">
            <span>Due Date </span>
            <input type="date" name="entry.371323935"/>
          </label>

          <p>By submitting, you agree to this agreement and there's no way out of it.</p>

          <input type="submit" value="Send"/>
        </form>
      </div>

    <div className="row section contact-cta">
      <div className="clio-prompt">Already started your case?</div>
      <h4 className="clio-cta">sign into clio</h4>
    </div>

    <div className="row section contact-info">
      <div className="col-sm-12 col-md-8">include map here</div>
      <div className="col-sm-12 col-md-4">
        <ul>
          <li>Markowitz Law</li>
          <li>address street</li>
          <li>Houston, TX 77xxx</li>
          <li>tel 000-000-0000</li>
          <li>email@email.com</li>
        </ul>
      </div>
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
