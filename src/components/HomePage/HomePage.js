import React from 'react';
import RecentBlocks from '../RecentBlocks/RecentBlocks';
import Hero from '../Hero/Hero';
import InfoSection  from './InfoSection';
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
        return (
            <main>
               <Hero />
               <RecentBlocks blocks={this.state.blocks} userName={null}/>
               <InfoSection />
            </main>
        )
    }
}