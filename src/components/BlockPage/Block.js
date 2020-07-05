import React from 'react';
import './Block.css';
import { Link } from 'react-router-dom';

export default class Block extends React.Component {
    render() {

    return(
        <div className="block">
            <div>{this.props.userName}</div>
            <div>{this.props.title}</div>
            <Link to={`/blocks/${this.props.category}/${this.props.id}`} className="preview-content">{this.props.description}</Link>
        </div>
    )
    }
};