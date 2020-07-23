import React from 'react';
import './Block.css';
import { Link } from 'react-router-dom';
import TokenService from '../../Services/token-service';

export default class Block extends React.Component {

renderIfLoggedIn() {
    return(
        <Link to={`/blocks/${this.props.category}/${this.props.id}`} 
        className="preview-content">
            {this.props.title}
        {/* {this.props.description} */}
        </Link>
    )
}

renderIfNotLoggedIn() {
    return(
        <div>{this.props.title}</div>
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

// renderImage() {
//     if(this.props.url && this.props.category === 'art') {
//         const styles = {backgroundImage: `url(${this.props.url})`}
//         return (
//             <div style={styles} className="icon"></div>
//         )
//     } else {
//         return (
//             <div className={`${this.props.category}-icon icon`}></div>
//         )
//     }
// }

renderImage() {
    return (
        <div className={`${this.props.category}-icon icon`}></div>
    )
}

render() {

const selection = this.renderCategorySelected();
const className = `block ${this.props.category} ${selection} `

    return(
        <div className={className}>
           {this.renderImage()}
            <div className="content">
            <Link to={`/user/${this.props.user_name}`}>{this.props.user_name}</Link>         
            {TokenService.hasAuthToken()
            ? this.renderIfLoggedIn()
            : this.renderIfNotLoggedIn()}
            </div>
        </div>
    )
    }
};