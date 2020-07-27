import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Register from "./components/RegistrationPage/Register";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import LogInPage from "./components/LogIn/LogIn";
import AboutPage from "./components/AboutPage/AboutPage";
import BlockPage from "./components/BlockPage/BlockPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import NewBlockInput from "./components/NewBlock/NewBlockInput";
import AccountPage from "./components/AccountPage/AccountPage";
import ProfilePage from "./components/AccountPage/ProfilePage";
import Terms from "./components/TermsPage/TermsPage";

import { DataContext } from "./Context";

import "./App.css";
import TokenService from "./Services/token-service";

export default class App extends React.Component {
  static contextType = DataContext;

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            {TokenService.hasAuthToken() ? (
              <Redirect to="/home" />
            ) : (
                <LandingPage />
              )}
          </Route>
          <Route path="/home" component={HomePage} />
          <Route path="/register" component={Register} />
          <Route path="/category/:id" component={CategoryPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/log-in" component={LogInPage} />
          <Route path="/blocks/:category/:id" component={BlockPage} />
          <Route path="/myaccount" component={AccountPage} />
          <Route exact path="/user/:user_name" component={AccountPage} />
          <Route
            exact
            path="/user/:user_name/profile"
            component={ProfilePage}
          />
          <Route path="/user/:user_name/newblock" component={NewBlockInput} />
          <Route path="/terms" component={Terms} />
          <Route component={NotFoundPage} />
        </Switch>

        <div className="footer-container">
          <footer>Claire Hendry 2020</footer>
        </div>
      </div>
    );
  }
}
