import React from 'react';
import NavBar from '../NavBar/NavBar';
import RecentBlocks from '../RecentBlocks/RecentBlocks';
import Hero from '../Hero/Hero'



export default class HomePage extends React.Component {
    render() {
        return (
            <div>
               <NavBar />
               <Hero />
               <RecentBlocks />
            </div>
        )
    }
}