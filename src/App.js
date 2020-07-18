import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Register from './components/RegistrationPage/Register';
import CategoryPage from './components/CategoryPage/CategoryPage';
import LogInPage from './components/LogIn/LogIn';
import AboutPage from './components/AboutPage/AboutPage';
import BlockPage from './components/BlockPage/BlockPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import NewBlockInput from './components/NewBlock/NewBlockInput';
import AccountPage from './components/AccountPage/AccountPage';

import { DataContext } from './Context';

import './App.css';


export default class App extends React.Component {

static contextType = DataContext;

  render() {

    //conditionally render accountpage depending on what user
    //if have auth token, user should be updated to user

    return (
      <div>
        <NavBar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/home' component={HomePage} />
            <Route path='/register' component={Register} />
            <Route path='/category/:id' component={CategoryPage}/>
            <Route path='/about' component={AboutPage} />
            <Route path='/log-in' component={LogInPage} />
            <Route path='/blocks/:category/:id' component={BlockPage} />
            <Route exact path='/user/:user_name' component={AccountPage} />
            <Route path='/user/:user_name/newblock' component={NewBlockInput} />
            <Route component={NotFoundPage} />
          </Switch>
        
        <div className="footer-container">
          <footer>Claire Hendry 2020</footer>
        </div>
      </div>
    )
  }
};