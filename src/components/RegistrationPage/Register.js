import React from 'react';
import './Register.css'

export default class RegisterPage extends React.Component {
    render() {
        return (
            <div className="register-page">
              
               <h2>Register for an account</h2> 
                    <form className="registration-form">
                        <label htmlFor="userName">user name</label>
                            <input className="userName"
                            id="userName"
                            type="text"
                            placeholder="username"/>
                        <label htmlFor="email">email</label>
                            <input className="email"
                            id="email"
                            type="text"
                            placeholder="email"/>
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