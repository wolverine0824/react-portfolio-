import React from 'react'
// import Resume from './resume.js'

 function About() {
    return (
        <div>
            <header className="py-5">
            <div className="container px-lg-5">
                <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div className="m-4 m-lg">
                    <h1 className="display-5 fw-bold" id="about">About Logon T. Pierce</h1>
                    <p className="fs-4">A Full Stack Developer having acquired a knowledge for building Scalable web applications that will help improve efficiency in customer operations.  With a background working in leadership positions.  I posses great communication skills on all rapport, strong orginization and team leadership proficiency.</p>
                    {/* <a className="btn btn-primary btn-lg" href={Resume} download={Resume}></a> */}
                    </div>
                </div>
            </div> 
              </header>      
        </div>
    );
}


export default About;