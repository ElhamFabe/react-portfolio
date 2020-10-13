import React, { Component } from 'react';


function Portfolio() {
        return (
          <main className="container-fluid">
          {/* <!-- Card group / row 1 --> */}
          <section className="row card-group">
  
              {/* <!-- Inside section will be an article tag --> */}
              <article className="card mb-4">
  
                  {/* <!-- Placeholder image / alt attribute for accesibility --> */}
                  <div className="view overlay">
                      <a target="_blank" href="https://elhamfabe.github.io/Password_Generator/"><img className="card-img-top" src="./Assets/img/passwordgenerator.png" alt="Password Generator landing page"/>
                     
                          <div className="mask rgba-white-slight"></div>
                      </a>
                  </div>
  
                  {/* <!-- Card content --> */}
                  <div className="card-body">
  
                      {/* <!-- Title --> */}
                      <h4 className="card-title">Password Generator</h4>
                      {/* <!-- paragraph description of project --> */}
                      <p className="card-text">The client expressed how they would like a password generator that can help any user effeciently create a password that is challenging and hard to copy. By answering the prompts, the user will receive their password based on their selected criteria.</p>
  
                  </div>
                  {/* <!-- Card content --> */}
  
              </article>
  
              <article className="card mb-4">
  
                  {/* <!-- Placeholder image / alt attribute for accesibility --> */}
                  <div className="view overlay">
                      <a target="_blank" href="https://elhamfabe.github.io/Welcome_to_Game_Foo/"><img className="card-img-top" src="./Assets/img/gamefoo.png" alt="Game Foo landing page"/>
                          <div className="mask rgba-white-slight"></div>
                      </a>
                  </div>
  
                  {/* <!-- Card content --> */}
                  <div className="card-body">
                      {/* <!-- Title --> */}
                      <h4 className="card-title">Game Foo</h4>
                      {/* <!-- paragraph description of project --> */}
                      <p className="card-text">Game Foo is gaming database applicaton inspired by our group’s collective love of all things video games!
                          Whether you are a fan of Playstation, Xbox or Nintendo, this is your one stop-shop when you are plagued with the age old question “So what do I play next?”</p>
  
  
                  </div>
                  {/* <!-- Card content --> */}
  
              </article>
  
              <article className="card mb-4">
  
                  {/* <!-- Placeholder image / alt attribute for accesibility --> */}
                  <div className="view overlay">
                      <a target="_blank" href="https://elhamfabe.github.io/Timed_Quiz/"><img className="card-img-top" src="./Assets/img/timedquiz.png" alt="Timed Quiz"/>
                    
                          <div className="mask rgba-white-slight"></div>
                      </a>
                  </div>
  
                  {/* <!-- Card content --> */}
                  <div className="card-body">
  
                      {/* <!-- Title --> */}
                      <h4 className="card-title">Time Quiz</h4>
                      {/* <!-- paragraph description of project --> */}
                      <p className="card-text">This timed quiz application is made up of multiple-choice questions that can run on any browser. This app is dynamically updated with HTML and CSS powered by Javascript code. The reponsive application will adapt to various screen sizes and feature a polished user interface.</p>
  
                  </div>
                  {/* <!-- Card content --> */}
  
              </article>
  
          </section>
  
          <section className="row card-group">
  
  
              <div className="card mb-4">
  
                  {/* <!-- Placeholder image / alt attribute for accesibility --> */}
                  <div className="view overlay">
                      <a target="_blank" href="https://github.com/ElhamFabe/Employee-Tracker" ><img className="card-img-top" src="./Assets/img/employee.png" alt="Employee Tracker"/>
                      
                          <div className="mask rgba-white-slight"></div>
                      </a>
                  </div>
  
                  {/* <!-- Card content --> */}
                  <div className="card-body">
  
                      {/* <!-- Title --> */}
                      <h4 className="card-title">Employee Tracker</h4>
                      {/* <!-- paragraph description of project --> */}
                      <p className="card-text">The Employee Tracker application is a Node.js command line based employee management system to add and manage employees, managers, roles and departments.</p>
  
  
                  </div>
  
  
              </div>
  
  
  
              <div className=" display:flex card mb-4">
  
                  {/* <!-- Placeholder image / alt attribute for accesibility --> */}
                  <div className="view overlay">
                      <a target="_blank" href="https://github.com/ElhamFabe/Note-Taker"><img className="card-img-top" src="./Assets/img/notetaker.png" alt="Note Taker Landing Page"/>
                      
                          <div className="mask rgba-white-slight"></div>
                      </a>
                  </div>
  
                  {/* <!-- Card content --> */}
                  <div className="card-body">
                      {/* <!-- Title --> */}
                      <h4 className="card-title">Note Taker</h4>
                      {/* <!-- paragraph description of project --> */}
                      <p className="card-text">Note taker application allows users to add, store and delete notes with ease. 
                      </p>
  
  
                  </div>
  
  
              </div>
  
  
  
              <article className="card mb-4">
  
                  {/* <!-- Placeholder image / alt attribute for accesibility --> */}
                  <div className="view overlay">
                      <a target="_blank" href="https://space-saverr.herokuapp.com/"><img className="card-img-top" src="./Assets/img/spacesaverr.png" alt="Space Saverr landing page"/>
                      
                          <div className="mask rgba-white-slight"></div>
                      </a>
                  </div>
  
                  {/* <!-- Card content --> */}
                  <div className="card-body">
  
                      {/* <!-- Title --> */}
                      <h4 className="card-title">Space Saverr</h4>
                      {/* <!-- paragraph description of project --> */}
                      <p className="card-text">Space Saverr is an application that helps any user navigate online shopping at a simple click of a button</p>
  
  
                  </div>
  
  
              </article>
  
  
          </section>
  
      </main>
        )
    }


export default Portfolio;