import React from 'react'
import Head from 'next/head'

import stylesheet from 'styles/index.scss'
import MobileNav from '../components/mobileNav'
import Nav from '../components/navigation'
import Accordion from '../components/accordion'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div className="container-fluid">
      <Head>
        <title>Markowitz Law</title>
        <meta name="description" content="TBD"/>
        <meta name="keywords" content="TBD"/>
        <meta name="author" content="Markowitz Law"/>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Head>

      <MobileNav/>
      <Nav/>

        <div className="jumbotron jumbotron-fluid" id="main">
          <div className="container home1">
            <img src="/static/mlaw.svg" alt="logo" className="img-fluid marko-logo" />
            <h1 className="display-4 head1"><b>Traffic court sucks. Period.</b></h1>
            <p className="lead">Let the experts fight on your behalf.</p>
            <p className="action">Scroll</p>
            <hr/>
          </div>
        </div>

        <div className="row section options home2">
          <h1 className="display-5 head2">You have options.<br/>Choose wisely.</h1>
          <div className="r-blob">
            <img src="/static/elements/r-blob.gif" alt=""/>
          </div>
          <div className="y-blob">
            <img src="/static/elements/y-blob.gif" alt=""/>
          </div>
          <div className="g-blob">
            <img src="/static/elements/g-blob.gif" alt=""/>
          </div>
          <p>Sitting in court for hours just to pay hefty fees and get ordered into defensive driving is no longer your only option when fighting a traffic ticket.</p>
          <p>At Markowitz Law, you can choose convenience over convention. Whether you choose to fight the ticket in court with a Markowitz trial attorney or opt for a more refined
            "court valet" service, we go to court prepared to get the results you need.</p>
          <p>See which route may be best for you below.</p>
        </div>

        <div className="row section">
          <iframe width="420" height="300" src="https://www.youtube.com/embed/H8NExnW8fNM?rel=0&amp;controls=0&amp;showinfo=0"
          frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <div className="home3">
            <div className="num-line"></div>
            <div className="num-label">NO.</div>
            <div className="num-value">01</div>
            <h1 className="display-5"><b>Court Valet</b></h1>
            <div className="deco1">
              SAVE<br/>YOUR<br/>TIME
            </div>
            <p className="lead">If your schedule is hectic and sacrificing uncertain hours in traffic court is out of the question, consider our Court Valet service. Court Valet may be the turnkey solution to your ticket problem.</p>

            <a className="home-link" href="/services">
              <h5 className="text-muted home-explore">EXPLORE YOUR OPTIONS </h5>
              <img className="arrow" src="/static/arrow-right.svg" alt=""/>
            </a>

          </div>
        </div>

        <div className="row section">
          <iframe width="420" height="300" src="https://www.youtube.com/embed/jZ5zgDhmjYg?rel=0&amp;controls=0&amp;showinfo=0"
          frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <div className="home4">
            <div className="num-line"></div>
            <div className="num-label">NO.</div>
            <div className="num-value">02</div>
            <h1 className="display-5"><b>Ticket Defense</b></h1>
            <div className="deco2">
              SAVE<br/>YOUR<br/>ENERGY
            </div>
            <p className="lead">If your schedule is flexible and you prefer to attend court with one of our lawyers, Ticket Defense may be the best option for you.</p>

            <a className="home-link" href="/services">
              <h5 className="text-muted home-explore">EXPLORE YOUR OPTIONS </h5>
              <img className="arrow" src="/static/arrow-right.svg" alt=""/>
            </a>

          </div>
        </div>

        <div className="cta">
          <h3 className="display-4">Save <span className="orange">time</span>.<br/>Save <span className="yellow">energy</span>.<br/>Submit your case today.</h3>
        </div>

        <div className="section legacy home5">
          <div className="num-container">
            <img className="img-responsive" src="/static/25.svg" alt="" />
            <div className="num-overlay">
              <h3 className="display-4 head3"><b>Our Legacy</b></h3>
            </div>
          </div>

            <h5 className="text-muted"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Est. 1993</h5>
            <p className="legacy-text">For more than 25 years, Markowitz Law has consistently delivered legal solutions
            and unparalleled value to Texas residents and its visitors. We’ve earned our reputation as a top-performing
            firm through our experienced attorneys and results-driven practice model.</p>

            <h4 className="case-title">How We Can Help You</h4>
            <Accordion/>
        </div>

      <div className="footer-info">
        <Footer/>
      </div>
    </div>
  )
};

export default Home;
