import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
import AuthApiService from '../../Services/auth-api-service'

export default class RegisterPage extends React.Component {

onRegistrationSuccess() {
    window.history.back()
}
    
state = { 
        user_name: '',
        password: '',
        email: '',  
        confirmPassword: '',
        error: null
     }

updateUsername(e) {
    this.setState({
        user_name: e.target.value
    })
}

validateUser_name() {
    if(this.state.user_name.length === 0) {
        return (
            <></>
        )
    }
    if(this.state.user_name.length < 3) {
        return (
            <div>Please select a user name longer than 3 characters</div>
        )
    }
}

updatePassword(e) {
    this.setState({
        password: e.target.value
    })
}

validatePassword() {
    const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/
    if(this.state.password.length === 0) {
        return (
            <></>
        )
    }
    if(this.state.password.length < 8 ||
        this.state.password.length > 72)
        return (
            <div>Password must be between 8 and 72 characters</div>
        )
    if(!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(this.state.password)) {
        return 'Password must contain 1 upper case, lower case, number and special character'
        }
}

validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

updateEmail(e) {
    this.setState({
        email: e.target.value
    })
}

validateEmailAddress() {
    if(this.state.email.length === 0) {
        return (
            <></>
        )
    }
    if(!this.validateEmail(this.state.email))
        return(
            <div>Email is not valid</div>
        )

}

updateConfirmPassword(e) {
    this.setState({
        confirmPassword: e.target.value
    })
}

confirmPassword() {
    if(this.state.confirmPassword !== this.state.password) {
        return (
            <div>Passwords do not match</div>
        )
    }
}



handleSubmit = (e) => {
    e.preventDefault();
    const {user_name, password, email, confirm_password} = e.target

    this.setState({ error: null })
    AuthApiService.postUser({
        user_name: user_name.value,
        user_password: password.value,
        user_email: email.value,
    })
    .then(user => {
        user_name.value = ''
        password.value = ''
        email.value = ''
        confirm_password = ''
        this.props.onRegistrationSuccess()
    })
    .catch(res => {
        this.setState({ error: res.error })
    })
}

renderErrorMessage() {
    return (
        <div>{this.state.error}</div>
    )
}


    render() {
        return (
            <div className="register-page">
              
               <h2>Register for an account</h2> 
                    <form className="registration-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="user_name">user name</label>
                            <input className="user_name"
                            id="user_name"
                            type="text"
                            placeholder="user_name"
                            onChange={e => this.updateUsername(e)}/>
                            {this.state.error !== null
                            ? this.renderErrorMessage()
                            : null}
                            {this.validateUser_name()}
                        <label htmlFor="email">email</label>
                            <input className="email"
                            id="email"
                            type="email"
                            placeholder="email"
                            onChange={e => this.updateEmail(e)}
                           />
                           {this.validateEmailAddress()}
                        <label htmlFor="password">password</label>
                            <input className="password"
                            id="password"
                            type="password"
                            placeholder="password"
                            onChange={e => this.updatePassword(e)}/>
                            {this.validatePassword()}
                        <label htmlFor="confirm_password">confirm password</label>
                            <input className="password"
                            id="confirm_password"
                            type="password"
                            placeholder="confirm password"
                            onChange={e => this.updateConfirmPassword(e)}/>
                            {this.confirmPassword()}
                        <label htmlFor="terms">I agree to the Creative's Block 
                            <Link to='/terms' target='_blank'>Terms of Use</Link></label>
                            <input className="terms"
                            id="terms"
                            type="checkbox" required/>
                        <button type="submit">Register</button>
                    </form>
        
            </div>
        )
    }
}