import React from 'react';

const FAQ = () => {
  return (
  <div id="faq" className="row">
    <div className="col-sm-4">
      <div className="card faq col-sm">
        <div className="card-header" id="headingOne">
          <h5 className="case-action">Time Responsible
            <span className="faq-line"></span>
          </h5>
          <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <h4 className="case-client">What about insurance rates tho?</h4>
          </button>
        </div>
        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#faq">
          <div className="card-body">
            <p>asdfsdfs</p>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-4">
      <div className="card faq col-sm">
        <div className="card-header" id="headingTwo">
          <h5 className="case-action">Business Oriented
            <span className="faq-line"></span>
          </h5>
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <h4 className="case-client">Da fuq is an escort service?</h4>
          </button>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#faq">
          <div className="card-body">
            <p>asdfsdfs</p>
          </div>
        </div>
      </div>
      </div>

    <div className="col-sm-4">
      <div className="card faq col-sm">
        <div className="card-header" id="headingThree">
          <h5 className="case-action">Solution Driven
            <span className="faq-line"></span>
          </h5>
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <h4 className="case-client">How much will this cost me?</h4>
          </button>
        </div>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#faq">
          <div className="card-body">
            <p>asdfsdfs</p>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-4">
      <div className="card faq col-sm">
        <div className="card-header" id="headingFour">
          <h5 className="case-action">Multiplatform
            <span className="faq-line"></span>
          </h5>
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <h4 className="case-client">What is Clio? Who is she?</h4>
          </button>
        </div>
        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#faq">
          <div className="card-body">
            <p>asdfsdfs</p>
          </div>
        </div>
      </div>
    </div>


    <div className="col-sm-4">
      <div className="card faq col-sm">
        <div className="card-header" id="headingFive">
          <h5 className="case-action">Human Centered
            <span className="faq-line"></span>
          </h5>
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            <h4 className="case-client">Why should I even?</h4>
          </button>
        </div>
        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#faq">
          <div className="card-body">
            <p>asdfsdfs</p>
          </div>
        </div>
      </div>
    </div>

    <div className="col-sm-4">
      <div className="card faq col-sm">
        <div className="card-header" id="headingSix">
          <h5 className="case-action">Another One
            <span className="faq-line"></span>
          </h5>
          <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            <h4 className="case-client">Another question here?</h4>
          </button>
        </div>
        <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#faq">
          <div className="card-body">
            <p>asdfsdfs</p>
          </div>
        </div>
      </div>
    </div>

  </div>
  );
}

export default FAQ;
