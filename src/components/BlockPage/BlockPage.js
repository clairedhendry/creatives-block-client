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
    blockData: MockBlocks,
    category: this.props.match.params.category,
    id: this.props.match.params.id,
}

renderBlockPage() {
    const category = this.state.category;
    const id = parseInt(this.state.id);
    const data = this.state.blockData[`${category}`];
    const blockIndex = data.findIndex(el => el.id === id);
    const block = this.state.blockData[`${category}`][`${blockIndex}`];

    const description = block.description;
    const title = block.title;
    const userName = block.userName;
    const details = block.optional_details;
    const file = block.file;
    
    return (
        <div className="block-container">
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="userName">
                <h2><Link to={`/user/${userName}`}>{userName}</Link></h2>
            </div>
            <div className="description">Description: {description}</div>
            <a href={file} target="_blank">link</a>
        </div>
    )

}

componentDidMount() {
    this.renderBlockPage();
}

    render() {

const block = this.renderBlockPage();
        return(
            <div className="blocks-page-container">
                {block}
                <Feedback />
            </div>
        )
    }
}