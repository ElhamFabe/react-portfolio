import React from 'react';


function About() {
        return (
            <main className="container-fluid">
        <section className="Aboutme">
            <article className="card md-4">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="./Assets/img/Elrey.JPG" className="card-img" alt="Photo of Elham facing away"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="aboutcard card-title" style={{textDecoration: 'underline'}}>About Me</h2>
                            <h5 className="card-text aboutText">I'm a full stack web developer with a background in photoshop and lightroom.</h5>
                            <p className="aboutText"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia excepturi harum iusto possimus eaque, recusandae dicta placeat impedit, libero, minima veniam magni minus nisi sed odit? Dolorum, dolore porro? Nobis. </p>
                        </div>
                    </div>
                </div>
                </article>
        </section>
    </main>
        )
    }


export default About;