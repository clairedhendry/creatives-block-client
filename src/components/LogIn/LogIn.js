import React from 'react';
import TokenService from '../../Services/token-service';
import { DataContext } from '../../Context';
import AuthApiService from '../../Services/auth-api-service';
import config from '../../config'
import './LogIn.css';


export default class LogInPage extends React.Component {

static contextType = DataContext;

state = {
    user_name: '', 
    error: null   
}

static defaultProps = {
    onLoginSuccess: () => {}
  }

  updateName = (e) => {
      this.setState({
          user_name: e.target.value
      })
  }

  handleSubmitJwtAuth = e => {
      e.preventDefault();
      this.context.actions.updateLoggedIn()
      this.setState({ error: null })
      const { user_name, user_password } = e.target

      TokenService.saveUserToken(this.state.user_name)
    
      AuthApiService.postLogin({
          user_name: user_name.value,
          user_password: user_password.value,
        })
        .then(res => {
            user_name.value = ''
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
                <label htmlFor="user_name">user name</label>
                    <input className="user_name"
                    onChange={e => this.updateName(e)}
                    id="user_name"
                    type="text"
                    placeholder="user_name"/>
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