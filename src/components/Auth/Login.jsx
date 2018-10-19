import React from 'react';
import '../../styles/auth.css';
import {Button} from '../Common/Button';

export default class Login extends React.Component {
    
render () {
    return (
        <div className="container">
        <div className="space row justify-content-center align-items-center"> Oober </div>
        <div className="login-card card mx-auto shadow p-4 mb-4 bg-white rounded"> 
        <div className="card-body">
        <div className ="card-title row justify-content-center align-items-center">
       Hey <span role="img" aria-label="wave-emoji">👋 </span> Kindly input your login credentials
        </div>
        <div className="card-body">
        <div className="form-group">
        <label for="username" className="mx-auto"> Username </label>
        <input type="text" className="form-control" id="username" placeholder="Username" />
        </div>
        <div className="form-group">
        <label for="password" className="mx-auto"> Password </label>
        <input type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <div className="form-group">
        <Button className="btn btn-primary"  children={"Login"}/>
        </div>
            </div>
            </div>
        </div>
        </div>
    )
}
}