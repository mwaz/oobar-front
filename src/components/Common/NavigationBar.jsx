import React from 'react';

function Navigation(props) {
    return (
<div class="navbar navbar-expand-md navbar-fixed-top bg-dark navbar-dark ">
        <div class="container-fluid">
            <a class="navbar-brand text-light" href="#!"> Oober </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
           
            <div class="collapse navbar-collapse " id="collapseibleNavbar">
                <ul class="navbar-nav ml-auto">
                   {props.children}
                   
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#!" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Account Settings
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#!">Settings</a>
                            <a class="dropdown-item" href="#!">Logout</a>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    </div>

    );
}

export default Navigation;