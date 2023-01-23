import React, { Component, useCallback, useRef, useState  } from 'react'
import Webcam from "react-webcam";
import axios, { Axios } from 'axios';


export default function Checkin(props) {

    const [img, setImg] = useState(null);
    
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };

    const conTinue = (e) => {
        e.preventDefault();
        props.nextStep();
    }

    return (      
        <>
            <div className="container">
                <div className="innerContainer">
                    <div className="popup">
                        <div className="innerPopup">
                            <p><span style={{color:"#561ddb"}}><i class="bi bi-record-circle"></i> WISE YMS</span> now</p>
                            <p>New driver has arrived at Gate A</p>
                            <p><span style={{color:"grey"}}>Tap here to process check-in</span></p>
                       </div>
                    </div>
                </div>

                <div className="innerContainerTwo">
                    <div className="location">
                        <p><span style={{color:"blue"}}><i class="bi bi-geo-alt-fill"></i></span> Valley View Facility</p>
                    </div>
                    <div className="date">
                        <p><span style={{color:"blue"}}><i class="bi bi-calendar"></i></span> January 16, 2023</p>
                    </div>
                </div>

                <div className="innerContainerThree">
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button type="button" class="btn btn-outline-primary">INBOUND</button>
                    </div>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button type="button" class="btn btn-outline-secondary">OUTBOUND</button>
                    </div>
                </div>

                <div className="innerContainerFour">
                    <div className="driver">
                        <p><strong>Driver Check-in | YP64102</strong></p>
                    </div>
                    <div className="security">
                        <p><span style={{color:"green"}}><i class="bi bi-circle-fill"></i> No security threats identified</span><span style={{color:"grey"}}> (10 min ago)</span></p>
                    </div>
                </div>

                <div className="innerContainerFive">
                    <div className="driver">
                        <p><strong>Driver Check-in | BR64474</strong></p>
                    </div>
                    <div className="security">
                        <p><span style={{color:"yellow"}}><i class="bi bi-circle-fill"></i> Warning - restricted vehicle</span><span style={{color:"grey"}}> (5 min ago)</span></p>
                    </div>
                </div>

                <div className="innerContainerFive">
                    <div className="driver">
                        <p><strong>Driver Check-in | LE64135</strong></p>
                    </div>
                    <div className="security">
                        <p><span style={{color:"red"}}><i class="bi bi-circle-fill"></i> Alert - possible security threat</span><span style={{color:"grey"}}> (1 min ago)</span></p>
                    </div>
                </div>


                <div style={{marginTop:"242px"}}>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit" value="Continue" onClick={conTinue}>
                            <strong>NEXT</strong>
                        </button>
                    </div>
                </div>
                
            </div>

            
        </>
    )

}