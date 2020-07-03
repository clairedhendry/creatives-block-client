import React from 'react';
import './CategoryPage.css';
import RecentBlocks from '../RecentBlocks/RecentBlocks';
import { DataContext } from '../../Context';
import { MockBlocks } from '../../mockData/mock_blocks'

export default class CategoryPage extends React.Component {

static contextType = DataContext;

state = {
    blocks: MockBlocks,
}

    render() {
        return(
            <div className="category-page-container">
                <h1>Category Page</h1>
                <RecentBlocks blocks={MockBlocks} category={this.props.match.params.id} />
            </div>
        )
    }
}