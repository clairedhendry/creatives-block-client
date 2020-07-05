import React from 'react';
import './feedback.css';

export default class Feedback extends React.Component {

    render() {
        return(
            <div className="feedback-container">
                <form className="feedback-form">
                <label htmlFor="comment-area">Leave some feedback</label>
                <textarea id="comment-area" name="comment-field" cols="50" rows="8" placeholder="leave some feedback...">
                    
                </textarea>
     
                <button type="submit">Submit Feedback</button>
            </form>
            </div>
        )
    }
}