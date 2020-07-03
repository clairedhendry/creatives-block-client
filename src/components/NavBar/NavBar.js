import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';



export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navigation-bar">
                    <Link to='/' className="logo">Creative's Block</Link>
                    <div className="links">
                        <Link to='/sign-in'>Sign In</Link>
                        <Link to='/register'>Register</Link>
                        <Link to='/about'>About</Link>
                    </div>
                </nav>
            </div>
        )
    }
}