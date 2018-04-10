import React, { Component } from 'react';

class Navbar extends Component {
    render () {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{margin: 0}}>
                    <img className="navbar-brand" src={require('../Images/Berlitz_logo.png')} alt="Logo" style={{width: 120}}></img>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            
                    <div className="collapse navbar-collapse" id="navb">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link disabled">Choose language:</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link eng-flag" style={{cursor: "pointer"}}>English</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link jpn-flag" style={{cursor: "pointer"}}>日本語</a>
                            </li>
                        </ul>
            
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
                            <button className="btn btn-primary my-2 my-sm-0" type="button">Search</button>
                        </form>
                        
                    </div>
                </nav>
            </div>
        );
    }
};

export default Navbar; 