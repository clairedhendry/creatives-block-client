import React from 'react';
import { Link } from 'react-router-dom';
import './NewBlockInput.css'

export default class NewBlockInput extends React.Component {

//post new block to server
//protected end point authentication
//needs basic validation of inputs
//all inputs required

validateTitleInput = (e) => {

} 

validateFileInput = (e) => {

}

validateDescriptionInput = (e) => {
    
}

handleFileUpload() {

}

handleBlockSubmit = (e) => {
//temp response
e.preventDefault();
alert(`you submitted a new block!`)
}

    render() {
        return(
            <div className="new-block-container">
              <form className="new-block-form" onSubmit={this.handleBlockSubmit}>
                  <label htmlFor="title">Title</label>
                  <input 
                  id="title"
                  type="text"/>
                  <br />
                  <label for="myfile">Select files:</label>
                  <input type="file" id="myfile" name="myfile" multiple></input>
                  <br />
                  <button type="submit">Upload</button>
                  <br />
                  <label htmlFor="description-area">Description</label>
                    <textarea id="description-area" 
                    name="description-field" cols="50" rows="8" 
                    placeholder="What's your project about?">
                    </textarea>
                    <br />
                    <button type="submit" >Submit Block</button>
              </form>
            </div>
        )
    }
}