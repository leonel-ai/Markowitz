import React from 'react'

import stylesheet from 'styles/index.scss'

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <nav className="navbar fixed-bottom navbar-dark bg-dark">
        <a className="navbar-brand" href="/contact">
          <img className="nav-icons" src="/static/contact-w.png"/>
        </a>
        <a className="navbar-brand" href="https://app.clio.com/session/new" target="_blank">
          <img className="nav-icons" src="/static/clio-w.png"/>
        </a>
        <a className="navbar-brand" href="/contact">
          <img className="nav-icons" src="/static/add-w.png"/>
        </a>
        <a className="navbar-brand" href="tel:3372400858">
          <img className="nav-icons" src="/static/call-w.png"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-stretch" id="navbar">
          <ul className="navbar-nav text-right ml-auto mr-auto mobnav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  )
};

export default MobileNav;
