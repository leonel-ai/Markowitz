import React from 'react';

import stylesheet from 'styles/index.scss'

const Accordion = () => {
  return (
    <div id="accordion">
      <div className="card yellow">
        <div className="card-header" id="headingOne">
          <p className="mb-0 case-action">Resolve
            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h4 className="case-client">Out-of-Towner</h4>
            </button>
          </p>
        </div>

        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body">
            <p>"Thanks for making this process as painless as possible. I am not American, so
              I really didn't know what to expect. I was in and out of the courtroom with the
              ticket dismissed within one hour. I really liked the fact that we could submit everything
              electronically, and it was really uncomplicated.”</p>
            <p>— Ana</p>
          </div>
        </div>
      </div>
      <div className="card red">
        <div className="card-header" id="headingTwo">
          <p className="mb-0 case-action">Dismiss
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <h4 className="case-client">Teen Driver</h4>
            </button>
          </p>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div className="card-body">
            <p>"I have a CDL, so I couldn't afford this ticket on my driving record. I researched and called many lawyers,
              and Mr. Markowitz was by far the most professional lawyer I spoke to. He knew exactly what he was going to do
              and told me his exact plan for me if I hired him. When we got to court, Mr. Markowitz and his team had a plan,
              and that plan worked. Ticket dismissed!”</p>
            <p>— Jeremy</p>
          </div>
        </div>
      </div>
      <div className="card blue">
        <div className="card-header" id="headingThree">
          <p className="mb-0 case-action">Reduce
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <h4 className="case-client">Daily Commuter</h4>
            </button>
          </p>
        </div>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
          <div className="card-body">
            <p>"Thank you so much Markowitz and associates! I had three traffic citations which were all thrown out.
              I could have been in serious trouble with my drivers license... I didn't have the money to pay my fines.
              The help I received was most appreciated.”</p>
            <p>— Kent</p>
          </div>
        </div>
      </div>
      <div className="card orange">
        <div className="card-header" id="headingFour">
          <p className="mb-0 case-action">Recover
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              <h4 className="case-client">Commercial Trucker</h4>
            </button>
          </p>
        </div>
        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
          <div className="card-body">
            <p>"I have a CDL, so I couldn't afford this ticket on my driving record.
              Mr. Markowitz was by far the most professional lawyer I spoke to.
              He knew exactly what he was going to do. 
              When we got to court, Mr. Markowitz and his team had a plan,
              and that plan worked. Ticket dismissed!”</p>
            <p>— Jeremy</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Accordion;
