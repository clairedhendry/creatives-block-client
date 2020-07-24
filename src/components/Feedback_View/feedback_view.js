import React from "react";
import "./feedback_view.css";

export default class ViewFeedback extends React.Component {
  renderFeedback() {
    const feedback = this.props.blockFeedback.map((feedback) => {
      const className = `feedback ${this.props.category}`;
      return (
        <div className={className} key={feedback.id}>
          {feedback.date_provided}
          <br />
          {feedback.feedback}
          <br />
          <button type="submit">Flag this comment</button>
        </div>
      );
    });
    return feedback;
  }

  render() {
    return (
      <div className="view-feedback-container">{this.renderFeedback()}</div>
    );
  }
}
