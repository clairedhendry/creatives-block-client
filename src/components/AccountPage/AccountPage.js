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
   user: this.props.match.params.user_name,
    blocks: [],
    isLoading: true,
    noBlocks: true,
}


fetchBlocks() {
    
    const user_name = this.props.match.params.user_name;
    BlockAPIService.getUsersBlocks(user_name)
         .then(data => {
             data.length === 0
             ? this.setState({
                 noBlocks: true
             })
             : this.setState({
                 blocks: data,
             })
        })
    }


ifLoggedIn = () => {
    const check_user = TokenService.getUserToken() 
    ? TokenService.getUserToken() 
    : this.props.match.params.user_name;
    
    if(check_user !== this.props.match.params.user_name) {
        return this.props.match.params.user_name
    }
    return check_user;
    }

renderNewBlockButton = () => {
    const check_user = TokenService.getUserToken() 
    ? TokenService.getUserToken() 
    : null;
    const user_name = this.props.match.params.user_name
    if(check_user === this.props.match.params.user_name) {
        return  <div className="link">
            <Link to={`/user/${user_name}/newblock`}>Create new block</Link>
            </div>
    }
}

componentDidMount() {
// checkUser() {
    this.fetchBlocks()
}


// renderIfLoading() {
//     const user = this.ifLoggedIn();
//     if(!this.state.isLoading) {
//         return(
//             <RecentBlocks 
//             blocks={this.state.blocks} 
//             user_name={user} 
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

blocks() {

    if(!this.state.noBlocks) {
        return (
            <RecentBlocks blocks={this.state.blocks} user_name={null}/> 
        )
    } else {
        return (
        <div>There are no blocks to display!</div>
        )
    }
     
}

renderEditProfileLink() {
    const user = this.ifLoggedIn();
    const userLoggedIn = TokenService.getUserToken()
    if(this.state.user === userLoggedIn) {
        return (
            <Link to={`/user/${user}/profile`}>Edit Profile Info</Link>
        )
    }
   
}

    render() {

const user = this.ifLoggedIn();
const newBlockButton = this.renderNewBlockButton();
// const checkUser = this.checkUser();

        return(
            <div className="account-page-container">
                <h1>{user}'s Blocks</h1>
                {newBlockButton}
                {this.renderEditProfileLink()}
                {this.state.blocks.length > 0
                ? <RecentBlocks blocks={this.state.blocks} user_name={null}/>
                : <div className="no-blocks">There are no blocks to display!</div>}
               <Link className="footer-link" to='/home'>Home</Link>
            </div>
        )
    }
}
