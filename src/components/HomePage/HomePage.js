import React from 'react';
import RecentBlocks from '../RecentBlocks/RecentBlocks';
import Hero from '../Hero/Hero';

import BlockAPIService from '../../Services/block-api-service'



export default class HomePage extends React.Component {

state = {
    blocks: [],
}

componentDidMount() {

    BlockAPIService.getAllRecentBlocks()
    .then(data => {
        this.setState({
            blocks: data,
        })
    });
}
    render() {

const blocks = this.state.blocks.length > 0 ? <RecentBlocks blocks={this.state.blocks} userName={null}/> : <div>Loading blocks...</div>
        
        return (
            <main>
               <Hero />
               {blocks}
            
            </main>
        )
    }
}