import React from 'react';
import '../../styles/auth.css';
import {Button} from '../Common/Button';

export default class Signup extends React.Component {
render () {
    return (
        <div className="container">
        <div className="space row justify-content-center align-items-center"> Oober </div>
        <div className="signup-card card mx-auto shadow p-4 mb-4 bg-white rounded"> 
        <div className="card-body">
        <div className ="card-title row justify-content-center align-items-center">
       Hey <span role="img" aria-label="wave-emoji">👋 </span> Kindly input your details
        </div>
        <div className="card-body">
        <div className="form-group">
        <label for="username" className="mx-auto"> Username </label>
        <input type="text" className="form-control" id="username" placeholder="Username" />
        </div>
        <div className="form-group">
        <label for="email" className="mx-auto"> Email </label>
        <input type="email" className="form-control" id="email" placeholder="Email" />
        </div>
        <div className="form-group">
        <label for="password" className="mx-auto"> Password </label>
        <input type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <div className="form-group">
        <label for="cpassword" className="mx-auto"> Confirm Password </label>
        <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password" />
        </div>
        <div className="form-group">
        <Button className="btn btn-primary"  children={"Register"}/>
        </div>
            </div>
            </div>
        </div>
        </div>
    )
}
}