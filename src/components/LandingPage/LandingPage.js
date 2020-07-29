import React from 'react'
import { Link } from 'react-router-dom'
import InfoSection from '../InfoSections/InfoSection'
import './LandingPage.css'
import RegisterPage from '../RegistrationPage/Register'


export default class LandingPage extends React.Component {

    render() {
        return (
            <div className='landing-page-container'>
                <div className='landing-page-hero'>
                    <h1 className='landing-h1'>Creative's Block</h1>
                </div>

                <div className='landing-page-links'>
                    <Link to='/home'>Get Started</Link>
                    <Link to='/register'>Register</Link>
                    <Link to='/log-in'>Have an Account?</Link>
                </div>
                <InfoSection />
                <RegisterPage />
            </div>

        )
    }
}