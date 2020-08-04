import React from 'react'
import './ProfilePage.css'


export default class ProfilePage extends React.Component {

    state = {
        password: ''
    }

    resetPassword() {
        //need to implement logic to reset password using email address
    }

    render() {
        return (
            <div>
                Profile Page
            </div>
        )
    }
}