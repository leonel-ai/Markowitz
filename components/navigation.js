import React from 'react'

import stylesheet from 'styles/index.scss'

const Nav = () => {
  return (
    <div className="top-nav">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <nav className="navbar navbar-expand-md navbar-light">
        <a className="navbar-brand" href="/">Markowitz Law</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-stretch" id="navbar">
          <ul className="navbar-nav ml-auto mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/services">Services</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/faq">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Clio Sign-in</button>
          </form>
        </div>
      </nav>
    </div>
  )
};

export default Nav;
