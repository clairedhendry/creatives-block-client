import React from 'react';
import RecentBlocks from '../RecentBlocks/RecentBlocks';
import TokenService from '../../Services/token-service';
import BlockAPIService from '../../Services/block-api-service'
import { Link } from 'react-router-dom';
import './AccountPage.css';

export default class AccountPage extends React.Component {

   //new fetch call to server for all user's blocks
   //temp use mock data to fill
   
state = {
   user: this.props.match.params.userName,
    blocks: [],
    isLoading: true,
}


fetchBlocks() {
    
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
    const userName = this.props.match.params.userName
    if(check_user === this.props.match.params.userName) {
        return  <div className="link">
            <Link to={`/user/${userName}/newblock`}>Create new block</Link>
            </div>
    }
}

checkUser() {
    if(this.state.user !== this.props.match.params.userName) {
        this.setState({
            user: this.props.match.params.userName
        })
        this.fetchBlocks();
    } return
}

// renderIfLoading() {
//     const user = this.ifLoggedIn();
//     if(!this.state.isLoading) {
//         return(
//             <RecentBlocks 
//             blocks={this.state.blocks} 
//             userName={user} 
//             />
//         )
//     }
//     else if(this.state.isLoading) {
//         return(
//             <div className="is-loading">
//                 Fetching New Blocks
//             </div>
//         )
//     }
// }

    render() {

// const newBlocks = this.renderRecentBlocks();
const user = this.ifLoggedIn();
const newBlockButton = this.renderNewBlockButton();
const blocks = this.state.blocks.length > 0 ? <RecentBlocks blocks={this.state.blocks} userName={null}/> : this.fetchBlocks()
const checkUser = this.checkUser();

        return(
            <div className="account-page-container">
                <h1>{user}'s Blocks</h1>
                
                {newBlockButton}
                {blocks}
               <Link className="footer-link" to='/home'>Home</Link>
            </div>
        )
    }
}
