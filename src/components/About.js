import React from 'react'
import Resume from './resume.js'

 function About() {
    return (
        <div>
            <header className="py-5">
            <div className="container px-lg-5">
                <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div className="m-4 m-lg">
                    <h1 className="display-5 fw-bold" id="about">About Logon!</h1>
                    <p className="fs-4">Upcoming full stack developer completing studies at Georgia Institute of Technology, with 11 years experience as a competitive golfer, and a voluntary medical operations and service planning team ministry at wold changers church international.</p>
                    <a className="btn btn-primary btn-lg" href={Resume} download={Resume}></a>
                    </div>
                </div>
            </div> 
              </header>      
        </div>
    );
}


export default About;