import React from 'react';
import { Link } from 'react-router-dom';
import Feedback from '../FeedBack_Input/feedback';
import BlockAPIService from '../../Services/block-api-service'
import './BlockPage.css';
import TokenService from '../../Services/token-service';
import ViewFeedback from '../Feedback_View/feedback_view'

export default class BlockPage extends React.Component {

state = {
    blockData: {
        block_description: '',
        user_name: ''
    },
    category: this.props.match.params.category,
    id: this.props.match.params.id,
}

fetchBlockData() {
    //fetch specific block data
    //protected endpoint
    const category = this.state.category;
    const id = parseInt(this.state.id);

    BlockAPIService.getBlock(category, id)
    .then(data => {
        this.setState({
            blockData : data
        })
    })
}
    
renderBlockData() {
    const block  = this.state.blockData
    const description = block.block_description;
    const title = block.block_title;
    const userName = block.user_name;
    const details = block.feedback_details;
    const file = block.block_file;
    
   
    return (
        <div className="block-container">
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="userName">
                <h2><Link to={`/user/${userName}`}>{userName}</Link></h2>
            </div>
            <div className="description">Description: {description}</div>
            <a href={file} target="_blank" rel="noopener noreferrer">link</a>
        </div>
    )

}

fetchBlockFeedback() {

}

// componentDidMount() {
//     this.fetchBlockData();
// }

renderFeedbackInput() {
    
        return (
            <Feedback 
            user_name={this.state.blockData.user_name}
            block_id={this.state.blockData.id}
            
            />
       )
}

renderBlockFeedback() {
    return (
        <ViewFeedback />
    )
}


render() {


// const feedbackBlock = this.renderFeedback();

        return(
            <div className="blocks-page-container">
                {this.state.blockData.block_description === ''
                ? this.fetchBlockData()
                : this.renderBlockData()}
                {/* {feedbackBlock} */}
                {this.state.blockData.user_name === TokenService.getUserToken()
                ? this.renderBlockFeedback()
                : this.renderFeedbackInput()}
            </div>
        )
    }
}