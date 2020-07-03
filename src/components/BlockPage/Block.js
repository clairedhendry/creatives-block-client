import React from 'react';
import './Block.css'

export default class Block extends React.Component {
    render() {
    return(
        <div className="block">
            <p>{this.props.title}</p>
            <div>{this.props.description}</div>
        </div>
    )
    }
};