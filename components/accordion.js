import React from 'react';

import stylesheet from 'styles/index.scss'

const Accordion = () => {
  return (
    <div id="accordion">
      <div className="card yellow">
        <div className="card-header" id="headingOne">
          <p className="mb-0 case-action">Resolve
            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h4 className="case-client">The Out-of-Towner</h4>
            </button>
          </p>
        </div>

        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body">
            <p>Anim pariatur cliche reprehenderit, enim upidatat skateboard dolor. Brunch 3 wolf moon tempor, sunt aliquarigin coffee nuiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher em accusamus labore sustainable VHS.</p>
          </div>
        </div>
      </div>
      <div className="card red">
        <div className="card-header" id="headingTwo">
          <p className="mb-0 case-action">Dismiss
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <h4 className="case-client">The Teen Driver</h4>
            </button>
          </p>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div className="card-body">
            <p>Anim pariatur cliche reprehenderit, enim upidatat skateboard dolor. Brunch 3 wolf moon tempor, sunt aliquarigin coffee nuiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher em accusamus labore sustainable VHS.</p>          </div>
        </div>
      </div>
      <div className="card blue">
        <div className="card-header" id="headingThree">
          <p className="mb-0 case-action">Reduce
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <h4 className="case-client">The Daily Commuter</h4>
            </button>
          </p>
        </div>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
          <div className="card-body">
            <p>Anim pariatur cliche reprehenderit, enim upidatat skateboard dolor. Brunch 3 wolf moon tempor, sunt aliquarigin coffee nuiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher em accusamus labore sustainable VHS.</p>          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
