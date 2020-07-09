import React from 'react';
import RecentBlocks from '../RecentBlocks/RecentBlocks';
import Hero from '../Hero/Hero';
import InfoSection  from './InfoSection'
import  { MockBlocks } from '../../mockData/mock_blocks';
import ScrollDrag from '../scrolldrag/ScrollDrag'



export default class HomePage extends React.Component {
    render() {
        return (
            <main>
               <Hero />
               {/* <ScrollDrag blocks={MockBlocks} /> */}
               <RecentBlocks  userName={null}/>
               <InfoSection />
            </main>
        )
    }
}