import React from 'react'
import Head from 'next/head'

import stylesheet from 'styles/index.scss'
import MobileNav from '../components/mobileNav'
import Nav from '../components/navigation'
import Accordion from '../components/accordion'

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
          <p>Gone are the days where you have to spend hours sitting in court just to pay hefty court fees or be assigned defensive driving.</p>
          <p>At Markowitz Law, you have the option to let our attorneys fight for you or with you in court.</p>
        </div>

        <div className="row section">
          <iframe width="420" height="400" src="https://www.youtube.com/embed/H8NExnW8fNM?rel=0&amp;controls=0&amp;showinfo=0"
          frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <div className="home3">
            <div className="num-line"></div>
            <div className="num-label">NO.</div>
            <div className="num-value">01</div>
            <h1 className="display-5 pt-3"><b>Court Valet</b></h1>
            <p className="lead">If you have a busy schedule and prefer to have our team fight for you in court on your behalf, Court Valet (proxy) is the best option for you.</p>
            <p className="text-muted pb-4">* court attendance not required</p>
          </div>
        </div>

        <div className="row section">
          <iframe width="420" height="400" src="https://www.youtube.com/embed/jZ5zgDhmjYg?rel=0&amp;controls=0&amp;showinfo=0"
          frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <div className="home4">
            <h1 className="display-5 pt-3"><b>02. — Ticket Defense</b></h1>
            <p className="lead">If your schedule is flexible and you prefer to attend court with one of our lawyers, Ticket Defense is the best option for you.</p>
            <p className="text-muted pb-4">* court attendance required</p>
          </div>
        </div>

        <div className="cta">
          <h3 className="display-4">Save time.<br/>Save energy.<br/>Get started on your case today.</h3>
        </div>

        <div className="section legacy home5">
          <div className="num-container">
            <img className="img-responsive" src="/static/temp20.svg" alt="" />
            <div className="num-overlay">
              <h3 className="display-4"><b>Our Legacy</b></h3>
            </div>
          </div>

            <h5 className="text-muted"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Est. 1993</h5>
            <p className="pt-2 pb-2">For more than 20 years, Markowitz Law has consistently delivered legal solutions, convenient alternatives, and unparalleled value to Houstonians. We’ve earned our reputation as one of the city’s top firms through our highly-experienced attorneys and our 96.6% traffic ticket dismissal rate.</p>
            <Accordion/>
        </div>

    </div>
  )
};

export default Home;
