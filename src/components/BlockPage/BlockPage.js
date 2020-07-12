import React from 'react';
import { DataContext } from '../../Context';
import { MockBlocks } from '../../mockData/mock_blocks';
import { Link } from 'react-router-dom';
import Feedback from '../FeedBack/feedback';
import './BlockPage.css';


export default class BlockPage extends React.Component {

//should make fetch call to server with matching props.match.params.id
//but for static client, can pull directly from mockdata or context

static contextType = DataContext;

state = {
    blockData: this.context.state.blocks,
    category: this.props.match.params.category,
    id: this.props.match.params.id,
}

renderBlockPage() {
    //fetch specific block data
    //protected endpoint
    fetch()

    const category = this.state.category;
    const id = parseInt(this.state.id);
    // const data = this.state.blockData[`${category}`];
    const blockIndex = this.state.blockData.findIndex(el => el.id === id);
    const block = this.state.blockData[`${blockIndex}`];

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

componentDidMount() {
    // this.renderBlockPage();
}

    render() {

// const block = this.renderBlockPage();
        return(
            <div className="blocks-page-container">
                {/* {block} */}
                <Feedback />
            </div>
        )
    }
}