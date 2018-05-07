import React from 'react';

import stylesheet from 'styles/index.scss'

const Accordion = () => {
  return (
    <div id="accordion">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <b>The Out-of-Towner</b>
            </button>
          </h5>
        </div>

        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body">
            <p>Anim pariatur cliche reprehenderit, enim upidatat skateboard dolor. Brunch 3 wolf moon tempor, sunt aliquarigin coffee nuiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher em accusamus labore sustainable VHS.</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <b>The Teen Driver</b>
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body">
            <p>Anim pariatur cliche reprehenderit, enim upidatat skateboard dolor. Brunch 3 wolf moon tempor, sunt aliquarigin coffee nuiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher em accusamus labore sustainable VHS.</p>          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <b>The Daily Commuter</b>
            </button>
          </h5>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
          <div class="card-body">
            <p>Anim pariatur cliche reprehenderit, enim upidatat skateboard dolor. Brunch 3 wolf moon tempor, sunt aliquarigin coffee nuiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher em accusamus labore sustainable VHS.</p>          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
