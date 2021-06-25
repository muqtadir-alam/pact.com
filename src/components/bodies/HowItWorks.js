import React from 'react'

import './howitwork.css'
import Footer from '../footer/Footer'
function HowItWorks() {
    return (
        <>
        <div className="howitworks-container">
            <div className="left-part">
                <div className="learn">  <p>Learn</p></div>
               
                <div className=" left-paragraph">
                
                <p>Content creation is the ultimate way for Individuals, freelancers and businesses to strength their brand and online presence.</p>
                <p>Distributing the content is very challenging , mainly if you don’t have a significant Marketing budget.</p>
                <p>MarketingPact platform helps you to expose your content with no distribution budget.</p>
                <p>All you have to do is to join the relevant cluster and let community members promote your content.</p>
                <p>Your Community’s friends promote your content and you promote theirs.</p>
                    <p>This is the deal.</p>
                    </div>
            </div>
            <div className="mid-part">
                <div className="mid-paragraph">
                    <div>
                    <span>1</span>
                   
                <p>    Join Pact. You should register to your relevant cluster.</p>
                    </div>
                    <div>
                    <span>2</span>
                        <p>Upload content that you have published in sites and social networks , by placing the content link in our Content Pool.
                            <br />
                            <br />
                    Let people promote your content by watching It , Like It , write a comment or share It.</p>
                    </div>
                    <div>
                    <span>3</span>
               
                        <p>Go to our community member's content area and promote college’s content by watching It, Like It, write comments and share It.</p>
                    </div>
                    <div>
                    <span>4</span>
                        <p>The system follow member’s mutual promoting activities.</p>
                    </div>
                    
                    <div>
                    <span>5</span>
                        <p>Members get credit credits for each promotion activity (based on a simple tracking and reporting mechanism)</p>
                        </div>
                    </div>
                
                </div>
            <div className="right-part">
                <div className="credits">Credits</div>
                <div className="big-box">
                <div className="box">
                    <img src="images/shape.png" alt="" />
                    <p>You get 1 credit for watching / clicking on member's content link in the Content Pool</p>
                </div>
                    <div className="box">
                    <div className='two-star'>
                        <img src="images/shape.png" alt="" />
                            <img src="images/shape.png" alt="" />
                        </div>
                    <p>You get 3 credits for any share that you have made</p>
                    </div>
                    <div className="box">
                    <div className='three-star'>
                        <img src="images/shape.png" alt="" />
                        <img src="images/shape.png" alt="" />
                            <img src="images/shape.png" alt="" />
                            </div>
                    <p>You get 3 credits for any share that you have made</p>
                    </div>
                    <div className="box">
                        <div className='four-star'>
                        <img src="images/shape.png" alt="" />
                        <img src="images/shape.png" alt="" />
                        <img src="images/shape.png" alt="" />
                            <img src="images/shape.png" alt="" />
                            </div>
                    <p>You get 3 credits for any share that you have made</p>
                </div>
                </div>
                <p className="Only-active-members">Only active members (who have a reasonable number of credits) can be part of this mutual promotion community</p>
            </div>
         
         
        </div>
        <Footer />
        </>
    )
}

export default HowItWorks
