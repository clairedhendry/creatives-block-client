import React from "react";
import { Link } from "react-router-dom";
import Feedback from "../Feedback/feedback";
import BlockAPIService from "../../Services/block-api-service";
import "./BlockPage.css";
import TokenService from "../../Services/token-service";
import ViewFeedback from "../Feedback_View/feedback_view";
import ReactAudioPlayer from "react-audio-player";
import NewBlockInput from '../NewBlock/NewBlockInput';

export default class BlockPage extends React.Component {

  state = {
    blockData: {
      block_description: "",
      user_name: "",
    },
    category: this.props.test ? this.props.test : this.props.match.params.category,
    id: this.props.test ? 1 : this.props.match.params.id,
    blockFeedback: [],
    updateBlock: false,
  };

  checkUserTokenToFetch() {
    if (this.state.blockData.user_name === TokenService.getUserToken()) {
      BlockAPIService.getBlockFeedback(this.state.id).then((data) => {
        data.length === 0
          ? this.setState({
            blockFeedback: [
              { message: `There is no feedback on this block yet` },
            ],
          })
          : this.setState({
            blockFeedback: data,
          });
      });
    }
  }

  fetchBlockData() {
    const category = this.state.category;
    const id = parseInt(this.state.id);

    BlockAPIService.getBlock(category, id).then((data) => {
      this.setState({
        blockData: {
          block_description: data.block_description,
          block_file: data.block_file,
          block_title: data.block_title,
          block_url: data.block_url,
          category_id: data.category_id,
          date_updated: data.date_updated,
          feedback_details: data.feedback_details,
          id: data.id,
          user_name: data.user_name,
        },
      });
    });
  }

  renderBlockData() {
    const block = this.state.blockData;
    const description = block.block_description;
    const title = block.block_title;
    const user_name = block.user_name;
    const details = block.feedback_details;
    const url = block.block_url;
    let display;
    if (block.category_id === "art") {

      display = <div className="block-image-container">
        <img src={url} className="block-image" alt={''} />
      </div>
    }
    if (block.category_id === "music") {
      display = <ReactAudioPlayer src={url} controls loop />;
    }

    if (block.category_id === "writing") {
      display = <div className="writing-block-text"><p>{url}</p></div>;
    }

    return (
      <div className="block-container">
        <div className="title">
          <h1>{title}</h1>
        </div>
        {display}
        <div className="user_name">
          <h2>
            <Link to={`/user/${user_name}`}>{user_name}</Link>
          </h2>
        </div>
        <div className="description">Description: {description}</div>
        <div className="description">Feedback Details: {details}</div>
      </div>
    );
  }

  renderFeedbackInput() {
    if (TokenService.getUserToken() !== this.state.blockData.user_name) {
      return (
        <Feedback
          user_name={this.state.blockData.user_name}
          block_id={this.state.blockData.id}
        />
      );
    } else {
      return (
        <></>
      );
    }
  }

  renderBlockFeedback() {
    const message = this.state.blockFeedback[0].message;
    if (message) {
      return <div className="no-feedback">{message}</div>;
    } else {
      return (
        <ViewFeedback
          blockFeedback={this.state.blockFeedback}
          category={this.state.category}
        />
      );
    }
  }

  updateBlockInfo = () => {
    const info = this.state.updateBlock
    this.setState({
      updateBlock: !info
    })
  }

  render() {
    return (
      <div className="blocks-page-container">
        {this.state.blockData.block_description === ""
          ? this.fetchBlockData()
          : this.renderBlockData()}
        {this.state.updateBlock
          ? <NewBlockInput user_name={this.state.blockData.user_name} blockInfo={this.state} updating={true} id={this.state.id} />
          : <></>}
        <button onClick={this.updateBlockInfo}>Update Block</button>
        {this.state.updateBlock
          ? <button onClick={this.updateBlockInfo}>Cancel</button>
          : <></>}
        {this.state.blockFeedback.length === 0
          ? this.checkUserTokenToFetch()
          : this.renderBlockFeedback()}
        {this.renderFeedbackInput()}
      </div>
    );
  }
}
