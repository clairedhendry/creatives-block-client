import React from 'react';
import RecentBlocks from '../RecentBlocks/RecentBlocks';
import Hero from '../Hero/Hero';
import InfoSection  from './InfoSection'
import  { MockBlocks } from '../../mockData/mock_blocks';



export default class HomePage extends React.Component {
    render() {
        return (
            <main>
               <Hero />
               <RecentBlocks blocks={MockBlocks} userName={null}/>
               <InfoSection />
            </main>
        )
    }
}