import React from 'react'
import Head from 'next/head'

import stylesheet from 'styles/index.scss'

import MobileNav from '../components/mobileNav'
import Nav from '../components/navigation'

const About = () => {
  return (
    <div className="container-fluid">
      <Head>
        <title>About | Markowitz Law</title>
        <meta name="description" content="TBD"/>
        <meta name="keywords" content="TBD"/>
        <meta name="author" content="Markowitz Law"/>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Head>

      <MobileNav/>
      <Nav/>

      <div className="jumbotron jumbotron-fluid" id="main-about">
          <div className="container">
            {/* <img src="/static/mlaw.svg" alt="logo" className="img-fluid marko-logo" /> */}
            <h1 className="display-5">Headline copy can be here.</h1>
            <p className="lead">This is a law firm. You need a lawyer. We've got 'em.</p>
          </div>
        </div>

        <div className="row section">
          <img src="#" alt="" className="img-fluid banner"/>
          <h1 className="display-5">01. Choose proxy.</h1>
          <p className="lead">This is a law firm. You need a lawyer. We've got 'em. Come and get it. They're waiting to hear from you now.</p>
        </div>

        <div className="row section">
          <img src="#" alt="" className="img-fluid banner"/>
          <h1 className="display-5">02. Fight the case.</h1>
          <p className="lead">This is a law firm. You need a lawyer. We've got 'em. Come and get it. They're waiting to hear from you now.</p>
        </div>

        <div className="row section">
        </div>

    </div>
  )
};

export default About;
