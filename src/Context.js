import React from 'react';
import { MockBlocks } from './mockData/mock_blocks'

export const DataContext = React.createContext();

export class DataProvider extends React.Component {

state = {
    categories: [],
    blocks: {},
}

componentDidMount() {
    //populate recent blocks with dummy data
    //shohuld become fetch call to API
    this.setState({
        blocks: MockBlocks,

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

                    }
                }}>
                    {this.props.children}
                </DataContext.Provider>
        )
    };

}

export const DataConsumer = DataContext.Consumer;