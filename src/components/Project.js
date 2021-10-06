
import React from 'react';
import DP from '../assets/Image/DP.jpg'
import P1 from '../assets/Image/P1.jpg'
import P2 from '../assets/Image/P2.jpg'
import WAPP from '../assets/Image/WAPP.jpg'

function project() {

    return (
    <>
    <div class="row">
        <div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-8 offset-sm-2">
            <di className="card">
                <img className="card-img-top" src={DP} alt="A Workday Planner"></img>
                <div className="card-body">
                    <h5 className="card-title"> a Workday Planner </h5> 
                    {/* <p className="card-text"> Work</p> */}
                    <a href="https://wolverine0824.github.io/work-day-planner/" target="_blank" rel="noopener noreferrer" className="btn btn-primary"> deployed app</a>
                </div>
            </di>
        </div>
        <div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-8 offset-sm-2">
            <di className="card">
                <img className="card-img-top" src={P1} alt="coffeeOverFlow"></img>
                <div className="card-body">
                    <h5 className="card-title"> this app allows you to find fuel prices and weather in your area </h5> 
                    {/* <p className="card-text"> Work</p> */}
                    <a href="https://xtended99.github.io/CoffeeOverFlow/" target="_blank" rel="noopener noreferrer" className="btn btn-primary"> deployed app</a>
                </div>
            </di>
        </div>
        <div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-8 offset-sm-2">
            <di className="card">
                <img className="card-img-top" src={P2} alt="E-commerce"></img>
                <div className="card-body">
                    <h5 className="card-title"> this is an E-commerce site where you can purchase items </h5> 
                    {/* <p className="card-text"> Work</p> */}
                    <a href="https://gtbc-e-commerce.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary"> deployed app</a>
                </div>
            </di>
        </div>
        <div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-8 offset-sm-2">
            <di className="card">
                <img className="card-img-top" src={WAPP} alt="weather app"></img>
                <div className="card-body">
                    <h5 className="card-title"> this is a fully functioning weather app </h5> 
                    {/* <p className="card-text"> Work</p> */}
                    <a href="https://wolverine0824.github.io/wk6-weatherAPI/" target="_blank" rel="noopener noreferrer" className="btn btn-primary"> deployed app</a>
                </div>
            </di>
        </div>
    </div>
    </>
    );
}

export default project;






























// import projects from '../assets/projects'
// import React from 'react';
// import { removeHyphensAndCapitalize } from '../components/utils/helpers';

// function Project ({ projects }) {

//   const { name, repo, link, description } = projects;

//   return (
//     <div className="project" key={name}>
//       <img
//         src={require(`../assets/./${name}.jpg`)}
//         alt={removeHyphensAndCapitalize(name)}
//         className="project-bg"
//       />
//       <div className="project-text">
//         <h3>
//           <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
//           <a href={repo}>
//             <i className="fab fa-github"></i>
//           </a>
//         </h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default Project;
