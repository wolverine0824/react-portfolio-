import React, { useState } from 'react';
import Project from "../Project";


function Portfolio() {

    // Replace links with deployed projects and GitHub repos
  //   this is showing me projects with useState 
    const [projects] = useState([
      {
        name: 'weather app',
        description: 'this is a weather application that shows weather in your city',
        link: "https://github.com",
        repo: "https://github.com"
      },
      {
        name: 'work-day planner',
        description: 'this application allows you to set goals for your work day',
        link: "https://github.com",
        repo: "https://github.com"
      },
      {
        name: 'coffee overflow',
        description: 'the application allows you to see fuel prices and weather in your city',
        link: "https://github.com",
        repo: "https://github.com"
      },
      {
        name: 'e-commerce',
        description: 'this application allows you to purchased products',
        link: "https://github.com",
        repo: "https://github.com"
      },
      {
        name: 'calculator',
        description: 'React/JavaScript/CSS',
        link: "https://github.com",
        repo: "https://github.com"
      },
    ]);
  
    return (
      <div>
        <div className="flex-row">
          {projects.map((project, idx) => (
            <Project
              project={project}
              key={"project" + idx}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Portfolio;