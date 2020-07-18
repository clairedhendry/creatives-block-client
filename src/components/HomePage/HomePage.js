import React from 'react';
import RecentBlocks from '../RecentBlocks/RecentBlocks';
import Hero from '../Hero/Hero';
import './HomePage.css'
import BlockAPIService from '../../Services/block-api-service'



export default class HomePage extends React.Component {

state = {
    blocks: [],
    loading: true,
}

// componentDidMount() {

//     BlockAPIService.getAllRecentBlocks()
//     .then(data => {
//         this.setState({
//             blocks: data,
//         })
//     });
// }

renderLoading() {
    if(this.state.loading) {
        return (
            <div className="loading">Loading Blocks...</div>
        )
    }
}
    
fetchRecentBlocks() {
    BlockAPIService.getAllRecentBlocks()
        .then(data => {
            this.setState({
                blocks: data
            })
        })
        .then( () => {
            this.setState({
                loading: false
            })
        })
}

render() {

        
        return (
            <main>
               <Hero />
               {this.renderLoading()}
               {this.state.blocks.length === 0
               ? this.fetchRecentBlocks()
               : <RecentBlocks blocks={this.state.blocks} user_name={null}/>
                }
            
            </main>
        )
    }
}