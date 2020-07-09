import React from 'react';
import BlockAPIService from './Services/block-api-service'
import { MockBlocks } from './mockData/mock_blocks'
import config from './config'
export const DataContext = React.createContext();

export class DataProvider extends React.Component {

state = {
    categories: [],
    blocks: [],
    // art_blocks: [],
    // writing_blocks: [],
    // music_blocks: [],
    categorySelected: 'all',
    user_logged_in: '',
}

componentDidMount() {
    //populate recent blocks with dummy data
    //should become fetch call to API
    // this.setState({
    //     art_blocks: MockBlocks.Art,
    //     writing_blocks: MockBlocks.Writing,
    //     music_blocks: MockBlocks.Music,
    // })
    fetch(`${config.API_ENDPOINT}/recent-blocks`, {
            headers: {
                'Authorization': `Bearer ${config.AUTHORIZATION}`,
            },
        })
        .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error(response.statusText);
            }
          })
         
          .then(data => {
              this.setState({
                  blocks: data,
              })
          })
          .catch((err) => {
            alert(`something went wrong: ${err.message}`)
          });
}

updateCategorySelected = (category) => {
    this.setState({
        categorySelected: category,
    })
}

updateUserLoggedIn = (userName) => {
    this.setState({
        user_logged_in: userName,
    })
}

    render() {
        return(
            <DataContext.Provider
                value={{
                    state: {
                        ...this.state
                    },
                    actions: {
                        updateCategorySelected: this.updateCategorySelected,
                        updateUserLoggedIn: this.updateUserLoggedIn,
                    }
                }}>
                    {this.props.children}
                </DataContext.Provider>
        )
    };

}

export const DataConsumer = DataContext.Consumer;