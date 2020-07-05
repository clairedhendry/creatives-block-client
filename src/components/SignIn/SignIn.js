import React from 'react';
import './SignIn.css'


export default class SignInPage extends React.Component {
    render() {
        return (
            <div className="signin-page">
              <h2>Sign In</h2>
                <form className="signin-form">
                <label htmlFor="userName">user name</label>
                    <input className="userName"
                    id="userName"
                    type="text"
                    placeholder="username or email"/>
                <label htmlFor="password">password</label>
                    <input className="password"
                    id="password"
                    type="text"
                    placeholder="password"/>

                <button type="submit">Log In</button>

                </form>
            </div>
        )
    }
}