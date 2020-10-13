import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarnavAltMarkup"
                    aria-controls="navbarnavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <!-- navbar logo / active link --> */}
                <Link className="navbar-brand ml-auto" to="/" onClick={closeMobileMenu} >
                    <img src="./Assets/img/elogo.png" width="100" height="50" alt="initialslogo" loading="lazy" />
                </Link>
                {/* <!-- linked toggler to links --> */}
                <div className="collapse navbar-collapse" id="navbarnavAltMarkup" onClick={handleClick}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/aboutme" onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/portfolio" onClick={closeMobileMenu}>Portfolio</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/contact" onClick={closeMobileMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )



}


export default Navbar;