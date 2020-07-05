import React from 'react';
import RecentBlocks from '../RecentBlocks/RecentBlocks';
import { MockBlocks } from '../../mockData/mock_blocks'
import './AccountPage.css';

export default class AccountPage extends React.Component {

   //new fetch call to server for all user's blocks
   //temp use mock data to fill
   
state = {
    blocks: MockBlocks
}

renderRecentBlocks() {
    const userName = this.props.match.params.userName;
    const art_blocks = this.state.blocks.art.filter(block => block.userName === userName);
    const writing_blocks = this.state.blocks.writing.filter(block => block.userName === userName);
    const music_blocks = this.state.blocks.music.filter(block => block.userName === userName);

    const newBlocks = {
        art: art_blocks,
        writing: writing_blocks,
        music: music_blocks,
    };

    return newBlocks;
}

componentDidMount() {
    this.renderRecentBlocks();
}

    render() {

const newBlocks = this.renderRecentBlocks();


        return(
            <div className="account-page-container">
                <h1>Account Page</h1>
                <RecentBlocks blocks={newBlocks} userName={this.props.match.params.userName} category='all'/>
            </div>
        )
    }
}
