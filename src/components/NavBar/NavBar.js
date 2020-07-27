import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../Services/token-service';
import { DataContext } from '../../Context'
import './NavBar.css';



export default class NavBar extends React.Component {

    static contextType = DataContext;

    state = {
        menu_clicked: false,
        logged_in: this.context.state.logged_in
    }

    handleLogOutClick = () => {
        TokenService.clearAuthToken();
        TokenService.clearUserToken();
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
                <Link to={`/myaccount`} onClick={this.updateMenuState}>My Account</Link>
            </div>
        )
    }

    renderDesktopNav() {

        return (

            <div className="horizontal">
                {this.context.state.user_logged_in
                    ? this.renderLogOutLink()
                    : this.renderLogInLink()}
            </div>
        )
    }


    updateMenuState = () => {
        const menu_state = this.state.menu_clicked;
        this.setState({
            menu_clicked: !menu_state,
        })

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