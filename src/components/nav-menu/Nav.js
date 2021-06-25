import React from 'react'
import './nav.css'
function Nav() {
    return (
        <div className="nav-container">
            <div className="pact">
            <h1>pact.</h1>
            </div>
            <div className="menue">
                <p> Menu</p>
                   
               
            </div>
          
            
            <div className="nav-components">
                <ul>
                    <li><a href="">Home Page</a></li>
                    <li><a href="">Content <br />Management </a></li>
                    <li><a href="">Content Pool</a></li>
           </ul>
            </div>
        </div>
    )
}

export default Nav
