import React from "react";
import BlockAPIService from "../../Services/block-api-service";
import "./NewBlockInput.css";

export default class NewBlockInput extends React.Component {
  state = {
    user_name: this.props.match.params.user_name,
    title: "",
    file: {},
    description: "",
    feedback_details: "",
    category: "",
  };

  updateTitleInput = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  updateDescriptionInput = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  updateCategory = (e) => {
    this.setState({
      category: e.target.value,
    });
  };

  onFileChangeHandler = (e) => {
    this.setState({
      file: e.target.files[0],
      loaded: 0,
    });
  };

  updateFeedbackDetails = (e) => {
    this.setState({
      feedback_details: e.target.value,
    });
  };

  handleBlockSubmit = (e) => {
    e.preventDefault();
    const user_name = this.state.user_name;
    const category_id = this.state.category;
    const block_title = this.state.title;
    const block_file = this.state.file;
    const block_description = this.state.description;
    const feedback_details = this.state.feedback_details;

    BlockAPIService.postNewBlock(
      user_name,
      category_id,
      block_title,
      block_file,
      block_description,
      feedback_details
    ).then(
      this.setState({
        title: "",
        file: {},
        description: "",
        feedback_details: "",
        category: "",
      })
    );
  };

  render() {
    return (
      <div className="new-block-container">
        <form className="new-block-form" onSubmit={this.handleBlockSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            onChange={(e) => this.updateTitleInput(e)}
            required
          />

          <p>Select a category</p>
          <select
            name="category"
            id="category"
            onChange={this.updateCategory}
            required
          >
            <option value=""></option>
            <option value="art">art</option>
            <option value="writing">writing</option>
            <option value="music">music</option>
          </select>

          <label htmlFor="myfile">Select files:</label>
          <input type="file" name="file" onChange={this.onFileChangeHandler} />
          <label htmlFor="description-area">Description</label>
          <textarea
            id="description-area"
            name="description-field"
            cols="50"
            rows="8"
            onChange={(e) => this.updateDescriptionInput(e)}
            placeholder="What's your project about?"
            required
          ></textarea>
          <label htmlFor="feedback-details">What feedback do you need?</label>
          <textarea
            id="feedback-details"
            name="feedback-details"
            cols="50"
            rows="8"
            onChange={(e) => this.updateFeedbackDetails(e)}
            placeholder="Describe the feedback you're looking for..."
            required
          ></textarea>

          <button type="submit">Submit Block</button>
        </form>
      </div>
    );
  }
}
