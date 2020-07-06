import React from 'react';
import TokenService from '../../Services/token-service';
import './LogIn.css';


export default class LogInPage extends React.Component {

// handleSubmit = (e) => {
//     const { userName, password } = e.target
//     saveCredentials(
//         window.btoa(userName.value + ':' + password.value)
//     )
// }

handleSubmitBasicAuth = (e) => {
    e.preventDefault();
    const { userName, password } = e.target
    TokenService.saveAuthToken(
        TokenService.makeBasicAuthToken(userName.value, password.value)
    )
    userName.value = ''
    password.value = ''
}

    render() {
        return (
            <div className="login-page">
              <h2>Log In</h2>
                <form className="login-form" onSubmit={this.handleSubmitBasicAuth}>
                <label htmlFor="userName">user name</label>
                    <input className="userName"
                    id="userName"
                    type="text"
                    placeholder="username"/>
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