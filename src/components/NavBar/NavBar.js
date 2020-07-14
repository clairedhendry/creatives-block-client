import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../Services/token-service';
import { DataContext } from '../../Context'
import './NavBar.css';



export default class NavBar extends React.Component {

static contextType = DataContext;

state = {
    mobile: true,
    menu_clicked: false,
    logged_in: false,
}

handleLogOutClick = () => {
    TokenService.clearAuthToken();
    TokenService.clearUserToken();
    this.updateMenuState();
 
}

renderLogInLink() {
    return (
        <div className='nav-bar__not-logged-in vertical'>
            <Link to='/home' onClick={this.updateMenuState}>Home</Link>
            <Link to='/register' onClick={this.updateMenuState}>Register</Link>
            <Link to='/log-in' onClick={this.updateMenuState}>Log in</Link>
            <Link to='/about' onClick={this.updateMenuState}>About</Link>
       
      </div>
    )
}

renderLogOutLink() {

const user = TokenService.getUserToken();

    return(
        <div className='nav-bar_logged-in vertical'>
            <Link to='/home' onClick={this.updateMenuState}>Home</Link>
            <Link onClick={this.handleLogOutClick} to='/'>Logout</Link>
            <Link to='/about' onClick={this.updateMenuState}>About</Link>
            <Link to={`/user/${user}`} onClick={this.updateMenuState}>My Account</Link>
        </div>
    )
}

renderDesktopNav() {
 if(this.state.mobile === true) {
    return (
        this.renderMobileNav()
    )
 }
 else if(this.state.mobile === false) {
     return (
        <div>
        <div className="navigation-bar">
        <Link to='/home' onClick={this.updateMenuState}>Home</Link>
        <div className="links">
        {TokenService.hasAuthToken()
         ? this.renderLogOutLink()
         : this.renderLogInLink()}
        <Link to='/about' onClick={this.updateMenuState}>About</Link>
        </div>
        </div>

    </div>
     )
 }
}

updateMenuState = () => {
    const menu_state = this.state.menu_clicked;
    this.setState({
        menu_clicked: !menu_state,
    })
}

renderMobileNav() {
        if(this.state.menu_clicked) {
            return (
                <div className="mobile_nav">
                    <button onClick={this.updateMenuState}>menu</button>
                        
                       {TokenService.hasAuthToken()
                        ? this.renderLogOutLink()
                        : this.renderLogInLink()}
                          
                </div>
            )
        }
    
         else if(!this.state.menu_clicked) {
            return (
                <div className="mobile_nav">
                     <button onClick={this.updateMenuState}>menu</button>
                </div>
               
            )
    }
}


renderNavBar() {
const navBar = !this.state.mobile ? this.renderDesktopNav() : this.renderMobileNav();
return navBar;
}

render() {


        return (
            <nav className="navigation-bar">
                {this.renderNavBar()}
            </nav>
        )
    }
}