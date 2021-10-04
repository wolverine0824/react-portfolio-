import React from 'react'

function Resume() {
    return (
      <section className="my-5">
        <div className="my-2">
        <p>
          Download my <a href="https://mail.google.com/mail/u/0?ui=2&ik=1c494ef0ad&attid=0.1&permmsgid=msg-f:1702785361512306826&th=17a18243b9ad188a&view=att&disp=safe">resume</a>
          </p>
          <h3>Front-end Proficiencies</h3>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <h3>Back-end Proficiencies</h3>
          <ul className="skills">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </section>
    );
  }
  
  export default Resume;