import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../Services/token-service';
import './NavBar.css';



export default class NavBar extends React.Component {

state = {
    mobile: true,
    menu_clicked: false,
}

handleLogOutClick = () => {

}

renderLogInLink() {
    return (
        <div className='nav-bar__not-logged-in vertical'>
            <Link to='/'>Creative's Block</Link>
            <Link
            to='/register'>
            Register
            </Link>
          
            <Link
            to='/log-in'>
            Log in
            </Link>
            <Link to='/about'>About</Link>
      </div>
    )
}

renderLogOutLink() {
    return(
        <div className='nav-bar_logged-in vertical'>
            <Link to='/'>Creative's Block</Link>
            <Link
            onClick={this.handleLogoutClick}
            to='/'>
            Logout
            </Link>
            <Link to='/about'>About</Link>
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
        <Link to='/'>Creative's Block</Link>
        <div className="links">
        {TokenService.hasAuthToken()
         ? this.renderLogOutLink()
         : this.renderLogInLink()}
        <Link to='/about'>About</Link>
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
                        {/* <div className="links"> */}

                        {TokenService.hasAuthToken()
                        ? this.renderLogOutLink()
                        : this.renderLogInLink()}
              
                        {/* </div> */}
 
                
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
            // <nav>
            //         <div className="navigation-bar">
            //         <Link to='/' className="logo">Creative's Block</Link>
            //         <div className="links">
            //         {TokenService.hasAuthToken()
            //          ? this.renderLogOutLink()
            //          : this.renderLogInLink()}
            //         <Link to='/about'>About</Link>
            //         </div>
            //         </div>
            
            // </nav>
            <nav className="navigation-bar">
                {this.renderNavBar()}
            </nav>
        )
    }
}