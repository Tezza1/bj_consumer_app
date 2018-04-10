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
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                      <a class="nav-link" href="http://www.berlitz.co.jp/"><i class="fas fa-home"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://www.facebook.com/BerlitzJapan/"><i class="fab fa-facebook-square"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://twitter.com/berlitz_japan"><i class="fab fa-twitter-square"></i></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="https://www.linkedin.com/company/berlitz-corporation/?originalSubdomain=jp"><i class="fab fa-linkedin"></i></a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Footer;
