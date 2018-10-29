import React from 'react';
import '../../styles/auth.css';
import {connect} from 'react-redux'
import {Button} from '../Common/Button';
import {Link, withRouter} from 'react-router-dom';
import {userRegistration} from '../../redux/actions/authActionCreators/registration'
import Proptypes from 'prop-types';

class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: {
                username:'',
                email: '',
                password: '',
                confirmPassword: ''
            },
            success: false
        }
    }
    onChange =  e => {
        this.setState({data : { ...this.state.data, [e.target.name]: e.target.value}
        })
    }

   submit = () => {
      this.props.userRegistration(this.state.data);
   }
render () {
    const { success, data } = this.state
    return (
        <div className="container">
        <div className="space row justify-content-center align-items-center"> Oober </div>
        <div className="signup-card card mx-auto shadow p-4 mb-4 bg-white rounded"> 
        {success ? 
         <div className="alert alert-success" role="alert">
        Welcome {data.username}
       </div>  : '' }
       
        <div className="card-body">
        <div className ="card-title row justify-content-center align-items-center">
       Hey <span role="img" aria-label="wave-emoji">👋 </span> Kindly input your details
        </div>
        <div className="card-body">
        <div className="form-group">
        <label htmlFor="username" className="mx-auto"> Username </label>
        <input type="text" className="form-control" id="username" name="username" onChange={this.onChange} placeholder="Username" />
        </div>
        <div className="form-group">
        <label htmlFor="email" className="mx-auto"> Email </label>
        <input type="email" className="form-control" id="email" name="email"  onChange={this.onChange} placeholder="Email" />
        </div>
        <div className="form-group">
        <label htmlFor="password" className="mx-auto"> Password </label>
        <input type="password" className="form-control" id="password" name="password"  onChange={this.onChange} placeholder="Password" />
        </div>
        <div className="form-group">
        <label htmlFor="cpassword" className="mx-auto"> Confirm Password </label>
        <input type="password" className="form-control" id="cpassword" name="confirmPassword" onChange={this.onChange} placeholder="Confirm Password" />
        </div>
        <div className="form-group">
        <Button className="btn btn-primary"  children={"Register"} onClick={this.submit}/>
        <div className="row card-bottom-text"> Already a user?<Link to="/login">Login </Link> </div>
        </div>
            </div>
            </div>
        </div>
        </div>
    )
}
}
Signup.proptype = {
    userRegistration: Proptypes.func.isRequired
};

export default withRouter(connect(null, {userRegistration})(Signup))