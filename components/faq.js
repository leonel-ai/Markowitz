import React from 'react'
import Fade from 'react-reveal/Fade'

const FAQ = () => {
  return (
  <div id="faq" className="row">
    <div className="col-sm-4">
    <Fade bottom>
      <div className="card faq col-sm">
        <div className="card-header" id="headingOne">
          <h5 className="case-action">Time Responsible
            <span className="faq-line"></span>
          </h5>
          <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <h4 className="case-client">How do I submit a case?</h4>
          </button>
        </div>
        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#faq">
          <div className="card-body">
            <p>Submit your case via our <a href="https://app.clio.com/session/new" target="_blank">online portal</a> powered by Clio. Make sure to have the following items on hand once your case is taken:</p>
            <ul>
              <li>Original Citation</li>
              <li>Valid State-Issued ID</li>
              <li>Proof of Insurance</li>
              <li>Photos/Videos of Incident (if available)</li>
            </ul>
          </div>
        </div>
      </div>
    </Fade>
    </div>

    <div className="col-sm-4">
    <Fade bottom>
      <div className="card faq col-sm">
        <div className="card-header" id="headingTwo">
          <h5 className="case-action">Business Oriented
            <span className="faq-line"></span>
          </h5>
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <h4 className="case-client">Court Valet or Ticket Defense?</h4>
          </button>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#faq">
          <div className="card-body">
            <p><a href="https://www.youtube.com/embed/H8NExnW8fNM" target="_blank">Court Valet</a> — Our team handles the case on your behalf and significantly reduces your time spent in court. Your court attendance may not be necessary*.</p>
            <p><a href="https://www.youtube.com/embed/jZ5zgDhmjYg" target="_blank">Ticket Defense</a> — Our team handles the ticket in court before a trial judge. Your attendance may be required*.</p>
          </div>
        </div>
      </div>
      </Fade>
      </div>

    <div className="col-sm-4">
    <Fade bottom>
      <div className="card faq col-sm">
        <div className="card-header" id="headingThree">
          <h5 className="case-action">Solution Driven
            <span className="faq-line"></span>
          </h5>
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <h4 className="case-client">I've submitted a case. What's next?</h4>
          </button>
        </div>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#faq">
          <div className="card-body">
            <p>After analyzing your case, we will contact you to verify your citation details and establish a timeline to meet all of your court deadlines.</p>
          </div>
        </div>
      </div>
      </Fade>
    </div>

    <div className="col-sm-4 col-md-4 offset-md-2">
    <Fade bottom>
      <div className="card faq col-sm">
        <div className="card-header" id="headingFour">
          <h5 className="case-action">Multiplatform
            <span className="faq-line"></span>
          </h5>
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <h4 className="case-client">What is Clio Connect?</h4>
          </button>
        </div>
        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#faq">
          <div className="card-body">
            <p>Clio is a cloud-based software platform we use to track and manage your case. Through the Clio Connect dashboard, you’ll be able to
              review the current status, upload any necessary documents, and receive any communication from our team as your case progresses.</p>
            <p>Find out more about our case portal on the <a href="https://support.clio.com/hc/en-us" target="_blank">Clio Support Page.</a></p>
          </div>
        </div>
      </div>
      </Fade>
    </div>


    <div className="col-sm-4">
    <Fade bottom>
      <div className="card faq col-sm">
        <div className="card-header" id="headingFive">
          <h5 className="case-action">Human Centered
            <span className="faq-line"></span>
          </h5>
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            <h4 className="case-client">Will this affect my insurance rate?</h4>
          </button>
        </div>
        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#faq">
          <div className="card-body">
            <p>Although ticket dismissal is our highest priority for our clients, the effect on your insurance rate depends on the violation and outcome of your case.</p>
            <p><a href="https://www.insurance.com/auto-insurance/saving-money/tickets.aspx" target="_blank">Estimate your rate increase.</a></p>
          </div>
        </div>
      </div>
    </Fade>
    </div>
  </div>
  );
}

export default FAQ;
