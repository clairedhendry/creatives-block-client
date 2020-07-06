import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../Services/token-service';
import './NavBar.css';



export default class NavBar extends React.Component {

handleLogOutClick = () => {

}

renderLogInLink() {
    return (
        <div className='nav-bar__not-logged-in'>
            <Link
            to='/register'>
            Register
            </Link>
          
            <Link
            to='/login'>
            Log in
            </Link>
      </div>
    )
}

renderLogOutLink() {
    return(
        <div className='nav-bar_logged-in'>
            <Link
            onClick={this.handleLogoutClick}
            to='/'>
            Logout
            </Link>
        </div>
    )
}

    render() {
        return (
            <div>
                <nav className="navigation-bar">
                    <Link to='/' className="logo">Creative's Block</Link>
                    <div className="links">
                    {TokenService.hasAuthToken()
                     ? this.renderLogoutLink()
                     : this.renderLoginLink()}
                        <Link to='/about'>About</Link>
                    </div>
                </nav>
            </div>
        )
    }
}