import React from 'react';

function Navigation(props) {
    return (
<div className="navbar navbar-expand-md navbar-fixed-top bg-dark navbar-dark ">
        <div className="container-fluid">
            <a className="navbar-brand text-light" href="#!"> Oober </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
           
            <div className="collapse navbar-collapse " id="collapseibleNavbar">
                <ul className="navbar-nav ml-auto">
                   {props.children}
                   
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Account Settings
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#!">Settings</a>
                            <a className="dropdown-item" href="#!">Logout</a>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    </div>

    );
}

export default Navigation;