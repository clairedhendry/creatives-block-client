import React from 'react';
import Hero from '../Hero/Hero'
import './AboutPage.css';

export default class AboutPage extends React.Component {
    render() {
        return (
            <div className="about-page">
                <Hero />
               <section className="about">
                <p>Having trouble with that last chapter?
              
                Need some feedback on your latest comic?
              
                Have a song you’re working on, but something’s missing?
         
                Creative’s Block is here for you!
             
                Post your work in progress and get feedback from fellow creatives.
             <br />
             <br/>
               How does it work?
                
                It's easy! Sign in, create a new block!
           
                Choose a category: Visual Art, Writing, or Music.
               
                Users can sort by category or navigate to your page to find and check out your blocks.
               
                Check back often to see feedback on your block.
           
                Update, edit, or delete your block whenever you want!               
            </p>
        </section>
            </div>
        )
    }
}