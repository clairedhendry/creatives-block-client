import React from 'react';
import { MockBlocks } from './mockData/mock_blocks'

export const DataContext = React.createContext();

export class DataProvider extends React.Component {

state = {
    categories: [],
    art_blocks: [],
    writing_blocks: [],
    music_blocks: [],
    categorySelected: 'all',
}

componentDidMount() {
    //populate recent blocks with dummy data
    //should become fetch call to API
    this.setState({
        art_blocks: MockBlocks.Art,
        writing_blocks: MockBlocks.Writing,
        music_blocks: MockBlocks.Music,
    })
}

updateCategorySelected = (category) => {
    this.setState({
        categorySelected: category,
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
                    }
                }}>
                    {this.props.children}
                </DataContext.Provider>
        )
    };

}

export const DataConsumer = DataContext.Consumer;