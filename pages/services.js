import React from 'react'
import Head from 'next/head'

import stylesheet from 'styles/index.scss'

import MobileNav from '../components/mobileNav'
import Nav from '../components/navigation'

const Services = () => {
  return (
    <div className="container-fluid">
      <Head>
        <title>Services | Markowitz Law</title>
        <meta name="description" content="TBD"/>
        <meta name="keywords" content="TBD"/>
        <meta name="author" content="Markowitz Law"/>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Head>

      <MobileNav/>
      <Nav/>
      <div>
        <h1>Services</h1>
      </div>

    </div>
  )
};

export default Services;
