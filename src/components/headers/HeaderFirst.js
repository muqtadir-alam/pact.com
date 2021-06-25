import React from 'react'
import './headerfirst.css'
// import { Link } from 'react-router-dom'

export default function HeaderFirst() {
    return (
        <div>
            <div className="headerfirst-container">
                <div className="headerfirst-left">
                    <div className="left-icons">

                    <div className="hamburgur">
                    <a href="" class="icon" >
    <i class="fa fa-bars"></i>
                            </a>
                    <h1>pact.</h1>
                            
                       
                    </div>
                    {/* <h1>pact.</h1> */}
</div>
                </div>
                <div className="headerfirst-right">
          
                    <img src="images/notification.png" alt="" />
                   
                </div>
            </div>
        </div>
    )
}
