import React from 'react';
import { Link } from 'react-router-dom';
import   Block  from '../BlockPage/Block';
import  { MockBlocks } from '../../mockData/mock_blocks'
import './RecentBlocks.css'


export default class RecentBlocks extends React.Component {

//blocks can be fetched directly from component instead of context
//so rest of page can load while wait

state = {
    blocks: MockBlocks
}

renderVisArtsBlocks() {
    let VisArtsBlocks = this.state.blocks.Art.map(block => 
        <Block key={block.id} userName={block.userName} title={block.title} description={block.description}/>)
    return VisArtsBlocks;
}

renderWritingBlocks() {
    let WritingBlocks = this.state.blocks.Writing.map(block => 
        <Block key={block.id} userName={block.userName} title={block.title} description={block.description}/>)
    return WritingBlocks;
}

renderMusicBlocks() {
    let MusicBlocks = this.state.blocks.Music.map(block => 
        <Block key={block.id} userName={block.userName} title={block.title} description={block.description}/>)
    return MusicBlocks;
}

componentDidMount() {
    //will fetch block info and populate state
    this.renderVisArtsBlocks();
    this.renderWritingBlocks();
    this.renderMusicBlocks();
}

    render() {

const visArts = this.renderVisArtsBlocks();
const writing = this.renderWritingBlocks();
const music = this.renderMusicBlocks();

        return (
            <section className="recent-blocks-container">
                <div><p>Recently Posted Blocks</p></div>
                   <div className="container">     
                        <div className="visual-recent-blocks recent-blocks">
                            <Link to='/category/art' className="category-link">Artist's Blocks</Link>
                            {visArts}
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
            </section>
        )
    }
}