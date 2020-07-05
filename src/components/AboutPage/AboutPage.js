import React from 'react';
import './AboutPage.css';

export default class AboutPage extends React.Component {
    render() {
        return (
            <div className="about-page">
               <h1>About Page</h1>
               <section class="description">
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
            <section class="about"> 
            <p>
               <h3>How does it work?</h3> 
            
               As creatives, we get stuck from time to time. It’s normal!
                <br/>
                Creative's Block is here to help! 
                <br/>
                Post a work in progress, and get feedback from our community of creatives.
                <br/>
                Choose a category - Visual Art, Writing, or Music.
                <br/>
                Then share it! 
                <br/>
                Check back often to see feedback on your block.
                <br/>
                Update, edit, or delete your block whenever you want!
                <br/>
                Giving feedback earns you block credits
                <br/>
                Spend your block credits to post more blocks of your own
            </p>
        </section>
            </div>
        )
    }
}