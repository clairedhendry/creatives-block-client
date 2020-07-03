import React from 'react';

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
    let VisArtsBlocks = this.state.blocks.VisArts.map(block => 
        <Block key={block.id} title={block.title} description={block.description}/>)
    return VisArtsBlocks;
}

renderWritingBlocks() {
    let WritingBlocks = this.state.blocks.Writing.map(block => 
        <Block key={block.id} title={block.title} description={block.description}/>)
    return WritingBlocks;
}

renderMusicBlocks() {
    let MusicBlocks = this.state.blocks.Music.map(block => 
        <Block key={block.id} title={block.title} description={block.description}/>)
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
                            <p>Artist's Blocks</p>
                            {visArts}
                        </div>
                        <div className="writing-recent-blocks recent-blocks">
                            <p>Writer's Blocks</p>
                            {writing}
                        </div>
                        <div className="music-recent-blocks recent-blocks">
                            <p>Musician's Blocks</p>
                            {music}
                        </div>
                    </div>
            </section>
        )
    }
}