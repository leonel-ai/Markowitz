import React from 'react'
import Head from 'next/head'

import stylesheet from 'styles/index.scss'
import MobileNav from '../components/mobileNav'
import Nav from '../components/navigation'

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
          <div className="container">
            <img src="/static/mlaw.svg" alt="logo" className="img-fluid marko-logo" />
            <h1 className="display-5">Headline copy can be here.</h1>
            <p className="lead">This is a law firm. You need a lawyer. We've got 'em.</p>
          </div>
        </div>

        <div className="row section">
          <iframe width="420" height="440" src="https://www.youtube.com/embed/uve-ePdcoYs?rel=0&amp;controls=0&amp;showinfo=0"
          frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <h1 className="display-5">01. Choose proxy.</h1>
          <p className="lead">This is a law firm. You need a lawyer. We've got 'em. Come and get it. They're waiting to hear from you now.</p>
        </div>

        <div className="row section">
          <iframe width="420" height="440" src="https://www.youtube.com/embed/lOwQN3QcRzE?rel=0&amp;controls=0&amp;showinfo=0"
          frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <h1 className="display-5">02. Fight the case.</h1>
          <p className="lead">This is a law firm. You need a lawyer. We've got 'em. Come and get it. They're waiting to hear from you now.</p>
        </div>

        <div className="row section">
          <p className="col lead">testimonial</p>
          <p className="col lead">testimonial</p>
          <p className="col lead">testimonial</p>
        </div>

    </div>
  )
};

export default Home;
