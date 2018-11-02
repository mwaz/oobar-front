import React from 'react';
import '../../styles/auth.css';
import {Button} from '../Common/Button';
import {Link} from 'react-router-dom';
import {userLogin} from '../../redux/actions/authActionCreators/registration'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: {
                username:'',
                password: '',
            },
            success: false
        }
    }
    onChange =  e => {
        this.setState({data : { ...this.state.data, [e.target.name]: e.target.value}
        })}

    handleLogin = () => {
        this.props.userLogin(this.state.data)
    }
   
render () {
    const {userData} = this.props

    return (
        <div className="container">
        <div className="space row justify-content-center align-items-center"> Oober </div>
        <div className="login-card card mx-auto shadow p-4 mb-4 bg-white rounded"> 
        <div className="card-body">
        {userData &&
        <div className="alert alert-danger" role="alert">  
  {userData.data.message}
</div>
        }
        <div className ="card-title row justify-content-center align-items-center">
       Hey <span role="img" aria-label="wave-emoji">👋 </span> Kindly input your login credentials
        </div>
        <div className="card-body">
        <div className="form-group">
        <label htmlFor="username" className="mx-auto"> Username </label>
        <input type="text" className="form-control" id="username" name="username" onChange={this.onChange} placeholder="Username" />
        </div>
        <div className="form-group">
        <label htmlFor="password" className="mx-auto"> Password </label>
        <input type="password" className="form-control" id="password" name="password" onChange={this.onChange} placeholder="Password" />
        </div>
        <div className="form-group">
        <Button className="btn btn-primary"  children={"Login"} onClick={this.handleLogin}/>
        <div className="row card-bottom-text"> New User? <Link to="/signup"> Signup here</Link> </div>
        </div>
            </div>
            </div>
        </div>
        </div>
    )
}
}

Login.prototypes = {
    handleLogin: PropTypes.func.isRequired
}

function mapStateToProps (state) {
return {userData: state.users.response}
}

export default connect(mapStateToProps, {userLogin})(Login)