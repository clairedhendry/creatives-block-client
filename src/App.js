import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Register from './components/RegistrationPage/Register';
import CategoryPage from './components/CategoryPage/CategoryPage';
import SignInPage from './components/SignIn/SignIn';
import AboutPage from './components/AboutPage/AboutPage';
import BlockPage from './components/BlockPage/BlockPage'
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import { DataContext } from './Context'

import './App.css';


export default class App extends React.Component {

static contextType = DataContext;

  render() {

  const categoryId = this.conte

    return (
      <div>
        <NavBar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/register' component={Register} />
            <Route path='/category/:id' component={CategoryPage}/>
            <Route path='/about' component={AboutPage} />
            <Route path='/sign-in' component={SignInPage} />
            <Route path='/blocks/:id' component={BlockPage} />
            <Route component={NotFoundPage} />
          </Switch>
        <footer>Claire Hendry 2020</footer>
      </div>
    )
  }
};