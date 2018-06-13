import React from 'react'

import stylesheet from 'styles/index.scss'

const Nav = () => {
  return (
    <div className="top-nav">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <nav className="navbar fixed-top navbar-expand-md navbar-light">
        <a className="navbar-brand" href="/">
          <img src="/static/mlaw.svg" alt="logo" className="img-fluid marko-logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-stretch" id="navbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://app.clio.com/session/new" target="_blank">Clio Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
};

export default Nav;
