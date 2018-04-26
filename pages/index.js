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
            <h1 className="display-4">Markowitz Law</h1>
            <p className="lead">This is a law firm.</p>
          </div>
        </div>

        <div className="row section">
          <h1>video 1</h1>
        </div>

        <div className="row section">
          <h1>video 2</h1>
        </div>

        <div className="row section">
          <h1>section 3</h1>
        </div>

    </div>
  )
};

export default Home;
