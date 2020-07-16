import React from 'react';
import TokenService from '../../Services/token-service';
import { DataContext } from '../../Context';
import AuthApiService from '../../Services/auth-api-service';
import config from '../../config'
import './LogIn.css';


export default class LogInPage extends React.Component {

// static contextType = DataContext;

state = {
    user_name: '', 
    error: null   
}

// //should validate inputs

// handleSubmitBasicAuth = (e) => {
//     e.preventDefault();
//     const { userName, password } = e.target
//     this.context.actions.updateUserLoggedIn(userName.value)
//     TokenService.saveUserToken(userName.value)
//     TokenService.saveAuthToken(
//         TokenService.makeBasicAuthToken(userName.value, password.value)
//     )
//     userName.value = ''
//     password.value = ''
// }

static defaultProps = {
    onLoginSuccess: () => {}
  }

//   handleSubmitBasicAuth = ev => {
//     ev.preventDefault()
//     const { user_name, user_password } = ev.target

  
    
//     user_name.value = ''
//     user_password.value = ''
//     this.props.onLoginSuccess()
//   }

  updateName = (e) => {
      this.setState({
          user_name: e.target.value
      })
  }

  handleSubmitJwtAuth = e => {
      e.preventDefault();
      this.setState({ error: null })
      const { username, user_password } = e.target

      TokenService.saveUserToken(this.state.user_name)
    
      AuthApiService.postLogin({
          username: username.value,
          user_password: user_password.value,
        })
        .then(res => {
            username.value = ''
            user_password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
        })
        .catch(res => {
            this.setState({error: res.error})
        })
  }

    render() {
        return (
            <div className="login-page">
              <h2>Log In</h2>
                <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
                <label htmlFor="username">user name</label>
                    <input className="username"
                    onChange={e => this.updateName(e)}
                    id="username"
                    type="text"
                    placeholder="username"/>
                <label htmlFor="user_password">password</label>
                    <input className="user_password"
                    id="user_password"
                    type="text"
                    placeholder="password"/>

                <button type="submit">Log In</button>

                </form>
            </div>
        )
    }
}