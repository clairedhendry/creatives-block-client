import React from 'react';
import RecentBlocks from '../RecentBlocks/RecentBlocks';
import Hero from '../Hero/Hero';
import InfoSection  from './InfoSection'



export default class HomePage extends React.Component {
    render() {
        return (
            <div>
               <Hero />
               <RecentBlocks />
               <InfoSection />
            </div>
        )
    }
}