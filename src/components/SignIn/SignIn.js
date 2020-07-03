import React from 'react';
import {Link} from 'react-router-dom';

export default class SignIn extends React.Component {
    render() {
        return (
            <div>
               <Link to='/sign-in'>Sign In</Link>
            </div>
        )
    }
}