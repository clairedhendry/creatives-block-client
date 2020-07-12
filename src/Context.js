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

    BlockAPIService.getAllRecentBlocks()
    .then(data => {
        this.setState({
            blocks: data,
        })
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