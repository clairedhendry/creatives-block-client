import React from 'react';
import { Link } from 'react-router-dom';
import   Block  from '../BlockPage/Block';
import { DataContext } from '../../Context';
import './RecentBlocks.css'


export default class RecentBlocks extends React.Component {

//blocks can be fetched directly from component instead of context
//so rest of page can load while wait

static contextType = DataContext;

state = {
    blocks: this.props.blocks,
    category: 'all',
}

// renderVisArtsBlocks() {
//     let VisArtsBlocks = this.state.blocks.art.map(block => 
//         <Block key={block.id} id={block.id} category='art' userName={block.userName} title={block.title} description={block.description}/>)
//     return VisArtsBlocks;
// }

// renderWritingBlocks() {
//     let WritingBlocks = this.state.blocks.writing.map(block => 
//         <Block key={block.id} id={block.id} category='writing' userName={block.userName} title={block.title} description={block.description}/>)
//     return WritingBlocks;
// }

// renderMusicBlocks() {
//     let MusicBlocks = this.state.blocks.music.map(block => 
//         <Block key={block.id}
//          id={block.id} category='music' 
//         userName={block.userName} 
//         title={block.title} 
//         description={block.description}
//         date_updated={block.date_updated}/>)
//     return MusicBlocks;
// }



renderRecentBlocks() {
    let VisArtsBlocks = this.state.blocks.art;
    let WritingBlocks = this.state.blocks.writing;
    let MusicBlocks = this.state.blocks.music;
    const allBlocksArray = VisArtsBlocks.concat(WritingBlocks, MusicBlocks);
   
    const newArray = allBlocksArray.sort(function(a, b) {
        var keyA = new Date(a.date_updated),
          keyB = new Date(b.date_updated);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
    const newBlocks = newArray.map(block => 
        <Block key={block.id}
        id={block.id} 
        category={block.category_id}
        category_selected={this.state.category} 
        userName={block.userName} 
        title={block.title} 
        description={block.description}
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
   
    this.renderRecentBlocks();
}


// blockRender = (category) => {
//     const art = this.renderVisArtsBlocks();
//     const writing = this.renderWritingBlocks();
//     const music = this.renderMusicBlocks();
//     if((this.state.category === 'all') && (this.props.userName === null)) {
//         return (
//             <div className="container">   
//                         <div className="visual-recent-blocks recent-blocks">
//                             <Link to='/category/art' className="category-link">Artist's Blocks</Link>
//                             {art}
//                         </div>
//                         <div className="writing-recent-blocks recent-blocks">
//                             <Link to='/category/writing' className="category-link">Writer's Blocks</Link>
//                             {writing}
//                         </div>
//                         <div className="music-recent-blocks recent-blocks">
//                             <Link to='/category/music' className="category-link">Musician's Blocks</Link>
//                             {music}
//                         </div>
//                 </div>
//         )
//     }
//     else if((this.state.category === 'all') && (this.props.userName !== null)) {
//         return (
//             <div className="container">   
//                         <div className="visual-recent-blocks recent-blocks">
//                             <div className="category-link">Artist's Blocks</div>
//                             {art}
//                         </div>
//                         <div className="writing-recent-blocks recent-blocks">
//                             <div className="category-link">Writer's Blocks</div>
//                             {writing}
//                         </div>
//                         <div className="music-recent-blocks recent-blocks">
//                             <div className="category-link">Musician's Blocks</div>
//                             {music}
//                         </div>
//                 </div>
//         )
//     }

//     else if(this.state.category === 'art') {
//         return (
//             <div className="container">   
//                         <div className="recent-blocks">
//                             {art}
//                         </div>
//                         <div className="recent-blocks">
//                             {art}
//                         </div>
//                         <div className="recent-blocks">
//                             {art}
//                         </div>
//                 </div>
//         )
//     }
//     else if(this.state.category === 'writing') {
//         return (
//             <div className="container">   
//                         <div className="recent-blocks">
//                             {writing}
//                         </div>
//                         <div className="recent-blocks">
//                             {writing}
//                         </div>
//                         <div className="recent-blocks">
//                             {writing}
//                         </div>
//                 </div>
//         )
//     }
//     else if(this.state.category === 'music') {
//         return (
//             <div className="container">   
//                         <div className="recent-blocks">
//                             {music}
//                         </div>
//                         <div className="recent-blocks">
//                             {music}
//                         </div>
//                         <div className="recent-blocks">
//                             {music}
//                         </div>
//                 </div>
//         )
//     }

                        
// }

blockRender = (category) => {
    const allBlocks = this.renderRecentBlocks();
    if((this.props.userName === null)) {
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
                                   {allBlocks}
                               </div>
                        </div>
                )
            }
}

    render() {

const blocks = this.blockRender(this.state.category);


        return (
            <section className="recent-blocks-container">
                <div><p>Recently Posted Blocks</p></div>
                     
                        {blocks}
                
            </section>
        )
    }
}