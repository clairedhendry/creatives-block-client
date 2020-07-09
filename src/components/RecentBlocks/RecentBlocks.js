import React from 'react';
import { Link } from 'react-router-dom';
import   Block  from '../BlockPage/Block';
import { DataContext } from '../../Context';
import TokenService from '../../Services/token-service';
import BlockAPIService from '../../Services/block-api-service';
import './RecentBlocks.css'


export default class RecentBlocks extends React.Component {

//blocks can be fetched directly from component instead of context
//so rest of page can load while wait

static contextType = DataContext;

state = {
    blocks: this.context.state.blocks,
    category: 'all',
}


renderRecentBlocks() {
    // let VisArtsBlocks = this.state.blocks.art;
    // let WritingBlocks = this.state.blocks.writing;
    // let MusicBlocks = this.state.blocks.music;
    // const allBlocksArray = VisArtsBlocks.concat(WritingBlocks, MusicBlocks);
    // const allBlocksArray = this.state.blocks;
   

    // const newArray = allBlocksArray.sort(function(a, b) {
    //     var keyA = new Date(a.date_updated),
    //       keyB = new Date(b.date_updated);
     
    //     if (keyA < keyB) return -1;
    //     if (keyA > keyB) return 1;
    //     return 0;
    //   });

    // const newBlocks = newArray.map(block => 
    //     <Block key={block.id}
    //     id={block.id} 
    //     category={block.category_id}
    //     category_selected={this.state.category} 
    //     userName={block.userName} 
    //     title={block.block_title} 
    //     description={block.block_description}
    //     date_updated={block.date_updated}
    //     />)
    // return newBlocks;
}

updateCategorySelected = (e) => {
    e.preventDefault();
    this.setState({
        category: e.target.value
    })
}



componentDidMount() {
    //will fetch block info and populate state

    this.renderRecentBlocks();
    this.blockRender();
}

blockRender = (category) => {
    // const allBlocks = this.renderRecentBlocks();
                return (
                    <div className="container">   
                                <div className="block-filters">
                                    <button className="art-button" value="art" 
                                    onClick={this.updateCategorySelected}>Artist's Blocks</button>
                                    <button className="writing-button" value="writing" 
                                    onClick={this.updateCategorySelected}>Writer's Blocks</button>
                                    <button className="music-button" value="music" 
                                    onClick={this.updateCategorySelected}>Musician's Blocks</button>
                                    <button className="all-blocks-button" value="all"
                                    onClick={this.updateCategorySelected}>All Blocks</button>

                                </div>
                               <div className=" recent-blocks">
                                   {/* {allBlocks} */}
                               </div>
                        </div>
                )
            
}

render() {

const blocks = this.blockRender(this.state.category);


        return (
            <section className="recent-blocks-container">
                <div><p>Recently Posted Blocks</p></div>
                     {TokenService.hasAuthToken() ?
                        <div></div>
                    : <div className="sign-in-message">Sign in to see block details</div>}
                        {blocks}
                
            </section>
        )
    }
}