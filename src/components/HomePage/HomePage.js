import React from 'react';
import RecentBlocks from '../RecentBlocks/RecentBlocks';
import Hero from '../Hero/Hero';
import InfoSection  from './InfoSection'
import  { MockBlocks } from '../../mockData/mock_blocks';
import ScrollDrag from '../scrolldrag/ScrollDrag';
import { DataContext } from '../../Context'



export default class HomePage extends React.Component {

static contextType = DataContext; 
    render() {
        return (
            <main>
               <Hero />
               {/* <ScrollDrag blocks={MockBlocks} /> */}
               <RecentBlocks blocks={this.context.state.blocks} userName={null}/>
               <InfoSection />
            </main>
        )
    }
}