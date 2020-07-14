import React from 'react';
import './InfoSection.css';


export default function InfoSection() {
    return(
    <section className="info-container"> 
            
            
            <div className="information one">
                <div className="info-logo-1"></div>
                <div className="about right">
                    <h3>How does it work?</h3> 
               
                    <p>      
                    As creatives, we get stuck from time to time. 
                    <br />
                    It’s normal!
                        <br/>
                        Creative's Block is here to help! 
                        <br/>
                        Post a work in progress, and get feedback from our community of creatives.
                        <br/>
                        Choose a category: Art, Writing, or Music.
                        <br/>
                        Then share it! 
                        <br/>
                        Check back often to see feedback on your block.
                        <br/>
                        Update, edit, or delete your block whenever you want!
                    </p>
                </div>
           </div>

           <div className="information two">
                <div className="about left">
                    <p>
                        Click Get Started to look at Recently Posted Blocks
                        <br />

                    </p>
                </div>
           
        </div>
    </section>
    )
}