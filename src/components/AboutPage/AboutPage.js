import React from 'react';
import Hero from '../Hero/Hero'
import './AboutPage.css';

export default class AboutPage extends React.Component {
    render() {
        return (
            <div className="about-page">
                <Hero />
               <section className="description">
                <p>Having trouble with that last chapter?
                <br/>
                Need some feedback on your latest comic?
                <br/>
                Have a song you’re working on, but something’s missing?
                <br/>
                Creative’s Block is here for you!
                <br/> 
                Post your work in progress and get feedback from fellow creatives.
                </p>
             </section>
            <section className="about"> 
            <p>
               How does it work?
                <br />
                It's easy! Sign in, create a new block!
                <br/>
                Choose a category: Visual Art, Writing, or Music.
                <br/>
                Users can sort by category or navigate to your page to find and check out your blocks.
                <br/>
                Check back often to see feedback on your block.
                <br/>
                Update, edit, or delete your block whenever you want!
                <br/>
                
            </p>
        </section>
            </div>
        )
    }
}