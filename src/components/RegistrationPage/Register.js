import React from 'react';
import './Register.css'

export default class RegisterPage extends React.Component {

validateuser_name(e) {
    //validates that user_name is in correct format
    //also checks if user_name is already taken
    
}

validatePassword(e) {
    //validates password is in correct format
}

validateEmail(e) {
    //validates email address is in correct format
    const { email } = e.target.value;

}


    render() {
        return (
            <div className="register-page">
              
               <h2>Register for an account</h2> 
                    <form className="registration-form">
                        <label htmlFor="user_name">user name</label>
                            <input className="user_name"
                            id="user_name"
                            type="text"
                            placeholder="user_name"
                            onChange={e => this.validateuser_name(e.target)}/>
                        <label htmlFor="email">email</label>
                            <input className="email"
                            id="email"
                            type="email"
                            placeholder="email"
                           />
                        <label htmlFor="password">password</label>
                            <input className="password"
                            id="password"
                            type="text"
                            placeholder="password"/>
                        <label htmlFor="confirm-password">confirm password</label>
                            <input className="password"
                            id="confirm-password"
                            type="text"
                            placeholder="confirm password"/>

                        <button type="submit">Register</button>
                    </form>
        
            </div>
        )
    }
}