import React from "react";

import TokenService from './Services/token-service';

export const DataContext = React.createContext();

export class DataProvider extends React.Component {
  state = {
    categories: [],
    blocks: [],
    categorySelected: "all",
    userLoggedIn: null,
    logged_in: false,
    current_user_page: null,
  };

  updateCategorySelected = (category) => {
    this.setState({
      categorySelected: category,
    });
  };

  updateUserLoggedIn = (user_name) => {
    this.setState({
      userLoggedIn: user_name,
    });
  };

  updateCurrentUserPage = (user_name) => {
    this.setState({
      current_user_page: user_name
    })
  }

  updateLoggedIn = () => {
    this.setState({
      logged_in: !this.state.logged_in,
    });
  };

  componentDidMount() {
    this.updateUserLoggedIn(TokenService.getUserToken());
  }

  render() {
    return (
      <DataContext.Provider
        value={{
          state: {
            ...this.state,
          },
          actions: {
            updateCategorySelected: this.updateCategorySelected,
            updateUserLoggedIn: this.updateUserLoggedIn,
            updateLoggedIn: this.updateLoggedIn,
            updateCurrentUserPage: this.updateCurrentUserPage,
          },
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export const DataConsumer = DataContext.Consumer;
