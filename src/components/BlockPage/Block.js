import React from 'react';
import './Block.css';
import { Link } from 'react-router-dom';
import TokenService from '../../Services/token-service';

export default class Block extends React.Component {

renderIfLoggedIn() {
    return(
        <Link to={`/blocks/${this.props.category}/${this.props.id}`} 
        className="preview-content">
        {this.props.description}
        </Link>
    )
}

renderIfNotLoggedIn() {
    return(
        <div>{this.props.description}</div>
    )
}

renderCategorySelected() {
    let selection = ``;
   if(this.props.category_selected === 'all') {
       selection = `selected`
   }
    else if(this.props.category === this.props.category_selected) {
        selection = `selected`
    }
    else {
        selection = `deselected`
    }
    return selection;
}

render() {

const selection = this.renderCategorySelected();
const className = `block ${this.props.category} ${selection}`

    return(
        <div className={className}>
            <Link to={`/user/${this.props.userName}`}>{this.props.userName}</Link>
            <div>{this.props.title}</div>
            {TokenService.hasAuthToken()
            ? this.renderIfLoggedIn()
            : this.renderIfNotLoggedIn()}
        </div>
    )
    }
};