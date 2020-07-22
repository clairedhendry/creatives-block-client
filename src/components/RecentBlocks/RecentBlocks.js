import React from 'react';
import { Link } from 'react-router-dom';
import   Block  from '../BlockPage/Block';
import { DataContext } from '../../Context';
import TokenService from '../../Services/token-service';
import './RecentBlocks.css'


export default class RecentBlocks extends React.Component {

//blocks can be fetched directly from component instead of context
//so rest of page can load while wait

static contextType = DataContext;

state = {
   
    category: 'all',
}


renderRecentBlocks() {

    const allBlocksArray = this.props.blocks;
   

    // const newArray = allBlocksArray.sort(function(a, b) {
    //     var keyA = new Date(a.date_updated),
    //       keyB = new Date(b.date_updated);
     
    //     if (keyA > keyB) return -1;
    //     if (keyA < keyB) return 1;
    //     return 0;
    //   });

    const blockArray = (this.props.blocks.rows && (this.props.blocks.rows.length > 0))
                        ? this.props.blocks.rows
                        : this.props.blocks

    const newBlocks = blockArray.map(block => 
        <Block key={block.id}
        id={block.id} 
        url={block.block_url}
        category={block.category_id}
        category_selected={this.state.category} 
        user_name={block.user_name} 
        title={block.block_title} 
        description={block.block_description}
        date_updated={block.date_updated}
        />)
    return newBlocks;
}

updateCategorySelected = (e) => {
    e.preventDefault();
    this.setState({
        category: e.target.value
    })
}



componentDidMount() {
    //will fetch block info and populate state

    // this.renderRecentBlocks();

}

blockRender = (category) => {
    const allBlocks = this.renderRecentBlocks();
                return (
                    <div className="container">   
                                <div className="block-filters">
                                    <button className="art-button" value="art" 
                                    onClick={this.updateCategorySelected}>Art</button>
                                    <button className="writing-button" value="writing" 
                                    onClick={this.updateCategorySelected}>Writing</button>
                                    <button className="music-button" value="music" 
                                    onClick={this.updateCategorySelected}>Music</button>
                                    <button className="all-blocks-button" value="all"
                                    onClick={this.updateCategorySelected}>All</button>

                                </div>
                               <div className=" recent-blocks">
                                   {allBlocks}
                               </div>
                        </div>
                )
            
}

render() {

const blocks = this.blockRender(this.state.category);


        return (
            <section className="recent-blocks-container">
                <div><p>Recently Posted Blocks</p></div>
                     {TokenService.hasAuthToken() 
                    ?  <div>Sign in to view blocks</div>
                    : <div className="sign-in-message"><Link to='/log-in'>Sign in</Link> to see block details</div>}
                    {blocks}
                
            </section>
        )
    }
}