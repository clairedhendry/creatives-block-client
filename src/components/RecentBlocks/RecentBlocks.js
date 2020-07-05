import React from 'react';
import { Link } from 'react-router-dom';
import   Block  from '../BlockPage/Block';
import { DataContext } from '../../Context'
import './RecentBlocks.css'


export default class RecentBlocks extends React.Component {

//blocks can be fetched directly from component instead of context
//so rest of page can load while wait

static contextType = DataContext;

state = {
    blocks: this.props.blocks,
    category: this.props.category,
}

renderVisArtsBlocks() {
    let VisArtsBlocks = this.state.blocks.art.map(block => 
        <Block key={block.id} id={block.id} category='art' userName={block.userName} title={block.title} description={block.description}/>)
    return VisArtsBlocks;
}

renderWritingBlocks() {
    let WritingBlocks = this.state.blocks.writing.map(block => 
        <Block key={block.id} id={block.id} category='writing' userName={block.userName} title={block.title} description={block.description}/>)
    return WritingBlocks;
}

renderMusicBlocks() {
    let MusicBlocks = this.state.blocks.music.map(block => 
        <Block key={block.id} id={block.id} category='music' userName={block.userName} title={block.title} description={block.description}/>)
    return MusicBlocks;
}

componentDidMount() {
    //will fetch block info and populate state
    this.renderVisArtsBlocks();
    this.renderWritingBlocks();
    this.renderMusicBlocks();
}


blockRender = (category) => {
    const art = this.renderVisArtsBlocks();
    const writing = this.renderWritingBlocks();
    const music = this.renderMusicBlocks();
    if((this.state.category === 'all') && (this.props.userName === null)) {
        return (
            <div className="container">   
                        <div className="visual-recent-blocks recent-blocks">
                            <Link to='/category/art' className="category-link">Artist's Blocks</Link>
                            {art}
                        </div>
                        <div className="writing-recent-blocks recent-blocks">
                            <Link to='/category/writing' className="category-link">Writer's Blocks</Link>
                            {writing}
                        </div>
                        <div className="music-recent-blocks recent-blocks">
                            <Link to='/category/music' className="category-link">Musician's Blocks</Link>
                            {music}
                        </div>
                </div>
        )
    }
    else if((this.state.category === 'all') && (this.props.userName !== null)) {
        return (
            <div className="container">   
                        <div className="visual-recent-blocks recent-blocks">
                            <div className="category-link">Artist's Blocks</div>
                            {art}
                        </div>
                        <div className="writing-recent-blocks recent-blocks">
                            <div className="category-link">Writer's Blocks</div>
                            {writing}
                        </div>
                        <div className="music-recent-blocks recent-blocks">
                            <div className="category-link">Musician's Blocks</div>
                            {music}
                        </div>
                </div>
        )
    }

    else if(this.state.category === 'art') {
        return (
            <div className="container">   
                        <div className="recent-blocks">
                            {art}
                        </div>
                        <div className="recent-blocks">
                            {art}
                        </div>
                        <div className="recent-blocks">
                            {art}
                        </div>
                </div>
        )
    }
    else if(this.state.category === 'writing') {
        return (
            <div className="container">   
                        <div className="recent-blocks">
                            {writing}
                        </div>
                        <div className="recent-blocks">
                            {writing}
                        </div>
                        <div className="recent-blocks">
                            {writing}
                        </div>
                </div>
        )
    }
    else if(this.state.category === 'music') {
        return (
            <div className="container">   
                        <div className="recent-blocks">
                            {music}
                        </div>
                        <div className="recent-blocks">
                            {music}
                        </div>
                        <div className="recent-blocks">
                            {music}
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