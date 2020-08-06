import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../Services/token-service';
import { DataContext } from '../../Context'
import './NavBar.css';

export default class NavBar extends React.Component {

    static contextType = DataContext;

    state = {
        menu_clicked: false,
        // logged_in: this.props.test ? false : this.context.state.logged_in,
        // logged_in: false,
    }

    handleLogOutClick = () => {
        TokenService.clearAuthToken();
        TokenService.clearUserToken();
        this.context.actions.updateLoggedIn();
        this.context.actions.updateUserLoggedIn(null);
        this.updateMenuState();
    }

    renderLogInLink() {
        return (
            <div className='nav-bar__not-logged-in links'>
                <Link to='/home' onClick={this.updateMenuState}>Home</Link>
                <Link to='/register' onClick={this.updateMenuState}>Register</Link>
                <Link to='/log-in' onClick={this.updateMenuState}>Log in</Link>
                <Link to='/about' onClick={this.updateMenuState}>About</Link>

            </div>
        )
    }

    renderLogOutLink() {

        return (
            <div className='nav-bar_logged-in links'>
                <Link to='/home' onClick={this.updateMenuState}>Home</Link>
                <Link onClick={this.handleLogOutClick} to='/'>Logout</Link>
                <Link to='/about' onClick={this.updateMenuState}>About</Link>
                <Link to={`/myaccount/${this.context.state.userLoggedIn}`} onClick={this.updateMenuState}>My Account</Link>
            </div>
        )
    }

    updateUserLoggedIn() {
        this.context.actions.updateUserLoggedIn(TokenService.getUserToken())
    }

    updateMenuState = () => {
        const menu_state = this.state.menu_clicked;
        this.setState({
            menu_clicked: !menu_state,
        })

    }

    renderDesktopNav() {

        return (

            <div className="horizontal">
                {this.context.state.userLoggedIn
                    ? this.renderLogOutLink()
                    : this.renderLogInLink()}
            </div>
        )
    }

    renderMobileNav() {
        if (this.state.menu_clicked) {
            return (
                <div className="mobile_nav">
                    <button onClick={this.updateMenuState}>menu</button>

                    {TokenService.hasAuthToken()
                        ? this.renderLogOutLink()
                        : this.renderLogInLink()}
                </div>
            )
        }

        else if (!this.state.menu_clicked) {
            return (
                <div className="mobile_nav">
                    <button onClick={this.updateMenuState}>menu</button>
                </div>

            )
        }
    }

    renderNavBar() {
        const navBar = document.documentElement.clientWidth > 450
            ? this.renderDesktopNav()
            : this.renderMobileNav();
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