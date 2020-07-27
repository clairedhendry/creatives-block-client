import React from 'react';
import RecentBlocks from '../RecentBlocks/RecentBlocks';
import BlockAPIService from '../../Services/block-api-service';
import { DataContext } from '../../Context';
import { Link } from 'react-router-dom';
import './AccountPage.css';

export default class AccountPage extends React.Component {
    static contextType = DataContext;
    //new fetch call to server for all user's blocks
    //temp use mock data to fill

    state = {
        user: this.props.match.params.user_name || this.context.state.user_logged_in,
        blocks: [],
        isLoading: true,
        noBlocks: true,
    }


    fetchBlocks() {

        const { user } = this.state;
        BlockAPIService.getUsersBlocks(user)
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

    renderNewBlockButton = () => {

        if (!this.props.match.params.user_name) {
            return <div className="link">
                <Link to={`/user/${this.state.user}/newblock`}>Create new block</Link>
            </div>
        }
    }

    componentDidMount() {
        this.fetchBlocks()
    }

    renderEditProfileLink() {
        if (!this.props.match.params.user_name) {
            return (
                <Link to={`/user/${this.state.user}/profile`}>Edit Profile Info</Link>
            )
        }

    }

    componentWillUnmount() {
        this.setState({
            user: null
        })
    }

    render() {

        const { user } = this.state;
        const newBlockButton = this.renderNewBlockButton();

        return (
            <div className="account-page-container">
                <h1>{user}'s Blocks</h1>
                {newBlockButton}
                {this.renderEditProfileLink()}
                {this.state.blocks.length > 0
                    ? <RecentBlocks blocks={this.state.blocks} user_name={null} />
                    : <div className="no-blocks">There are no blocks to display!</div>}
                <Link className="footer-link" to='/home'>Home</Link>
            </div>
        )
    }
}
