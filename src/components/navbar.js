import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarnavAltMarkup"
                    aria-controls="navbarnavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <!-- navbar logo / active link --> */}
                <Link className="navbar-brand ml-auto" to="/">
                    <img src="./Assets/img/elogo.png" width="100" height="50" alt="initialslogo" loading="lazy" />
                </Link>
                {/* <!-- linked toggler to links --> */}
                <div className="collapse navbar-collapse" id="navbarnavAltMarkup">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/aboutme">About</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )



}


export default Navbar;