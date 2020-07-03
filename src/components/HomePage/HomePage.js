import React from 'react';
import RecentBlocks from '../RecentBlocks/RecentBlocks';
import Hero from '../Hero/Hero';
import InfoSection  from './InfoSection'
import  { MockBlocks } from '../../mockData/mock_blocks';



export default class HomePage extends React.Component {
    render() {
        return (
            <div>
               <Hero />
               <RecentBlocks blocks={MockBlocks} category="all"/>
               <InfoSection />
            </div>
        )
    }
}