import React from 'react'
import Fade from 'react-reveal/Fade'

const Resources = () => {
  return (
  <div id="resources" className="row">
    <div className="col col-lg-4">
    <Fade bottom>
      <div className="card yellow col-lg-12">
        <div className="card-header" id="headingSeven">
          <p className="mb-0 res-action">Resolve
            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
              <h4 className="res-header">General Clients</h4>
            </button>
          </p>
        </div>
        <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#resources">
          <div className="card-body">
            <p><a href="http://www.txdps.state.tx.us/DriverLicense/index.htm" target="_blank">Driver's License Portal</a></p>
            <p><a href="http://www.safedrivercentre.com/" target="_blank">Driver's Safety Course</a></p>
            <p><a href="https://txapps.texas.gov/tolapp/txldrcdr/TXDPSLicenseeManager" target="_blank">Driving Records</a></p>
            <p><a href="http://www.texasfailuretoappear.com/search.php" target="_blank">Failure to Appear Program</a></p>
            <p><a href="https://txapps.texas.gov/txapp/txdps/dleligibility/" target="_blank">License Status Check</a></p>
            <p><a href="http://www.sr22online.com/" target="_blank">SR-22 Insurance</a></p>
          </div>
        </div>
      </div>
      </Fade>
    </div>
    <div className="col col-lg-4">
    <Fade bottom>
      <div className="card red col-lg-12">
        <div className="card-header" id="headingEight">
          <p className="mb-0 res-action">Discover
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
              <h4 className="res-header">Legal Professionals</h4>
            </button>
          </p>
        </div>
        <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#resources">
          <div className="card-body">
            <p><a href="https://hccla.org/" target="_blank">HCCLA</a></p>
            <p><a href="https://www.tcdla.com/TCDLA/Default.aspx" target="_blank">TCDLA</a></p>
            <p><a href="http://tmcec.com/" target="_blank">TMCEC</a></p>
            <p><a href="http://www.txmca.com/" target="_blank">TMCA</a></p>
            <p><a href="https://www.texasbar.com/am/template.cfm" target="_blank">State Bar of Texas</a></p>
            <p><a href="https://www.county.org//about-texas-counties/texas-counties-related-sites/Pages/default.aspx" target="_blank">TX County Associations</a></p>
          </div>
        </div>
      </div>
      </Fade>
      </div>

      <div className="col col-lg-4">
      <Fade bottom>
      <div className="card blue col-lg-12">
        <div className="card-header" id="headingNine">
          <p className="mb-0 res-action">Recover
            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
              <h4 className="res-header">Commercial Drivers</h4>
            </button>
          </p>
        </div>
        <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#resources">
          <div className="card-body">
            <p><a href="https://www.fmcsa.dot.gov/" target="_blank">FMCSA</a></p>
            <p><a href="https://dataqs.fmcsa.dot.gov/Default.aspx" target="_blank">FMCSA DataQs</a></p>
            <p><a href="https://csa.fmcsa.dot.gov/" target="_blank">CSA 2010</a></p>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  </div>
  );
}

export default Resources;
