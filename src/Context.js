import React from "react";

import TokenService from './Services/token-service';

export const DataContext = React.createContext();

export class DataProvider extends React.Component {
  state = {
    categories: [],
    blocks: [],
    categorySelected: "all",
    user_logged_in: "",
    logged_in: false,
  };

  updateCategorySelected = (category) => {
    this.setState({
      categorySelected: category,
    });
  };

  updateUserLoggedIn = (user_name) => {
    this.setState({
      user_logged_in: user_name,
    });
  };

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
          },
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export const DataConsumer = DataContext.Consumer;
