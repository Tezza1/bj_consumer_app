import React from 'react';

const Footer = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <img className="navbar-brand" src={require('../Images/Berlitz_logo.png')} alt="Logo" style={{width: 120,}}></img>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link disabled">&copy; Berlitz Japan 2018</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Footer;
