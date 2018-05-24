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
            <p>What do you do when you get a traffic ticket in a city hundreds of miles away from home?
              Easy—submit your case to Markowitz. Our Court Valet service allows us to represent and fight for you in
              court while you rest easy back home, no flights necessary.</p>
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
            <p>Your teen’s first traffic ticket can mean high anxiety and even higher insurance rates for the whole family.
              We’ve all been new to the rules of the road, but our team of lawyers are veterans when it comes to second
              chances and ticket dismissals for young drivers. </p>
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
            <p>Racing past red lights, running stop signs, and speeding down the highway to clock in on time.
              Sound familiar? Driving to and from work can leave a lot of room for traffic violations.
              Luckily, we’re well-versed in getting cases dismissed and keeping driving records clean.</p>
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
            <p>You’ve already got valuable cargo to transport. The last thing you need to worry about is a compromised CDL.
              We specialize in case dismissal for commercial drivers, so you can get back on the road again, worry-free.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Accordion;
