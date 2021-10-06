import React from 'react'
// import Header from './Header'

function Navbar (props) {
// this adds style to my Navbar
 return (
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"> Logon pierce</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAtlMarkup"
      aria-controls="navbar-toggler-icon" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div>
      <div className="collapse navbar-collapse" id="navbarNavAtlMarkup">
        <button type="button" className="btn btn-primary" id="About" onClick={() => props.setCurrentPage('About')}>About</button>
        <button type="button" className="btn btn-primary" id="About" onClick={() => props.setCurrentPage('Contact')}>Contact</button>
        <button type="button" className="btn btn-primary" id="About" onClick={() => props.setCurrentPage('Project')}>Project</button>
        <button type="button" className="btn btn-primary" id="About" onClick={() => props.setCurrentPage('Resume')}>Resume</button>
        </div>
      </div>
    </div>
  </nav>
 );
}
export default Navbar;

