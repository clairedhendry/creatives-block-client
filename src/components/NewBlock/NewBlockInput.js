import React from "react";
import { Link } from 'react-router-dom';
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
    uploaded: false,
    error: null,
    text: '',
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

  onTextChangeHandler = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  updateFeedbackDetails = (e) => {
    this.setState({
      feedback_details: e.target.value,
    });
  };

  onSuccessfulUpload() {
    if (this.state.uploaded) {
      return (
        <div>
          <div>Your block has been successfully uploaded!</div>
          <Link to={`/user/${this.state.user_name}`}>Back</Link>
        </div>
      )
    }
  }

  handleBlockSubmit = (e) => {
    e.preventDefault();
    const user_name = this.state.user_name;
    const category_id = this.state.category;
    const block_title = this.state.title;
    const text = this.state.text;
    let block_file = this.state.file;
    const block_description = this.state.description;
    const feedback_details = this.state.feedback_details;


    if (category_id !== "writing") {
      BlockAPIService.postNewBlock(
        user_name,
        category_id,
        block_title,
        block_file,
        block_description,
        feedback_details
      ).then(res =>
        this.props.history.push(`/myaccount/${this.state.user_name}`)
      )
        .catch((res) => {
          this.setState({ error: res.error });
        })
    } else {
      block_file = text
      BlockAPIService.postNewWritingBlock(
        user_name,
        category_id,
        block_title,
        block_file,
        block_description,
        feedback_details
      ).then(res =>
        this.props.history.push(`/myaccount/${this.state.user_name}`)
      )
        .catch((res) => {
          this.setState({ error: res.error });
        })
    }
  };

  renderFileSelection() {

    if (this.state.category === "writing") {
      return (
        <div>
          <label htmlFor="mytext">Text field</label>
          <textarea
            id="mytext"
            name="mytext"
            rows="20"
            placeholder="Place your text here"
            required
            onChange={this.onTextChangeHandler} />
        </div>
      )
    }
    if (this.state.category === "art") {
      return (
        <div>
          <label htmlFor="myfile">Select files:</label>
          <input type="file"
            name="file"
            accept="image/*, video/*"
            onChange={this.onFileChangeHandler} />
        </div>
      )
    }
    if (this.state.category === "music") {
      return (
        <div>
          <label htmlFor="myfile">Select files:</label>
          <input type="file"
            name="file"
            accept="audio/*"
            onChange={this.onFileChangeHandler} />
        </div>
      )
    }
    else {
      return (
        <div className="input-message">Please select a category to upload a file</div>
      )
    }

  }

  renderUploadBlock() {

    if (!this.state.uploaded) {
      return (

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

          {this.renderFileSelection()}

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

      )
    } else {
      return (
        <div className="new-block-container">
          <div className="success-message">Your block has been successfully uploaded!</div>
          <Link to={`/user/${this.state.user_name}`}>Back</Link>
        </div>
      )
    }
  }

  render() {

    return (
      <div className="new-block-container">
        {this.renderUploadBlock()}
        {this.state.error === null
          ? <></>
          : <div>{this.state.error}</div>}
      </div>
    )
  }
}
