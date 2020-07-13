import React from 'react';
import RecentBlocks from '../RecentBlocks/RecentBlocks';
import { MockBlocks } from '../../mockData/mock_blocks';
import TokenService from '../../Services/token-service';
import BlockAPIService from '../../Services/block-api-service'
import { Link } from 'react-router-dom';
import './AccountPage.css';

export default class AccountPage extends React.Component {

   //new fetch call to server for all user's blocks
   //temp use mock data to fill
   
state = {
    blocks: [],
}

// renderRecentBlocks() {
//     const userName = this.props.match.params.userName;
//     const art_blocks = this.state.blocks.art.filter(block => block.userName === userName);
//     const writing_blocks = this.state.blocks.writing.filter(block => block.userName === userName);
//     const music_blocks = this.state.blocks.music.filter(block => block.userName === userName);

//     const newBlocks = {
//         art: art_blocks,
//         writing: writing_blocks,
//         music: music_blocks,
//     };

//     return newBlocks;
// }

componentDidMount() {
    const userName = this.props.match.params.userName;
    BlockAPIService.getUsersBlocks(userName)
        .then(data => {
            this.setState({
                blocks: data,
            })
        })
}

ifLoggedIn = () => {
    const check_user = TokenService.getUserToken() 
    ? TokenService.getUserToken() 
    : this.props.match.params.userName;
    
    if(check_user !== this.props.match.params.userName) {
        return this.props.match.params.userName
    }
    return check_user;
    }

renderNewBlockButton = () => {
    const check_user = TokenService.getUserToken() 
    ? TokenService.getUserToken() 
    : null;
    
    if(check_user === this.props.match.params.userName) {
        return  <div className="link">
            <Link to='/newblock'>Create new block</Link>
            </div>
    }
    
    
}

    render() {

// const newBlocks = this.renderRecentBlocks();
const user = this.ifLoggedIn();
const newBlockButton = this.renderNewBlockButton();

        return(
            <div className="account-page-container">
                <h1>{user}'s Blocks</h1>
                
                    {newBlockButton}
            
                <RecentBlocks 
                blocks={this.state.blocks} 
                userName={user} 
                />
            </div>
        )
    }
}
