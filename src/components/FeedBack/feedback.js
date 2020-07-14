import React from 'react';
import { Link } from 'react-router-dom';
import BlockAPIService from '../../Services/block-api-service'
import './feedback.css';

export default class Feedback extends React.Component {

state = {
    text: '',
    flagged: false,
    submitted: false
}

onChange = (e) => {
    this.setState({
        text: e.target.value
    })
}

    //user_id, blockid, text
handleSubmit = (e) => {
    e.preventDefault();
    const user_id = this.props.user_id
    const block_id = this.props.block_id
    const  text = this.state.text
    const flagged = this.state.flagged
    BlockAPIService.postFeedback(block_id, text, user_id, flagged)
    
    .then(
        this.setState({
            submitted: true
        })
    )
} 

renderForm = () => {
    if(!this.state.submitted) {
        return(
                <form className="feedback-form" onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="comment-area">Leave some feedback</label>
                    <textarea 
                    id="comment-area" 
                    name="comment-field" 
                    cols="50" rows="8" 
                    placeholder="leave some feedback..."
                    onChange={e => this.onChange(e)}
                    >
                    </textarea>
     
                <button type="submit">Submit Feedback</button>
                </form>

        )
    }
    else {
        return(
           <p>
                Thank you for submitting feedback!
           </p>
        )
    }
}

    render() {



       return(
           <div className="feedback-container">
               {this.renderForm()}
               <Link to={`/user/${this.props.userName}`}>Back</Link>
           </div>
       )
    }
}