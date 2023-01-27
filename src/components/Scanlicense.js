import React, { Component, useCallback, useRef, useState  } from 'react'
import Webcam from "react-webcam";
import axios, { Axios } from 'axios';


export default function Scanlicense(props) {

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

    const preVious = (e) => {
        e.preventDefault();
        props.prevStep();
    }

    return (      
        <>
            <div className="container">

                <div className="scanlicenseArrow" onClick={preVious}>
                    <i className="bi bi-arrow-left-short"></i>
                </div>

                <div className="scanlicenseTextAll">
                    <h3>Confirm license plate number</h3>
                    <div className="scanlicensePara">
                        <p>Check and confirm that the scanned license plate matches the real one.
                            If the plates don't match, manually enter the correct number.
                        </p>
                    </div>
                </div>

                <div className="photobox">
                    <div className="photobox-two">
                        <div className="camera" onClick={conTinue}>
                            {/*<i className="bi bi-camera"></i>*/}
                            <img src="plate.jpg" width="700" height="190"/>
                        </div>
                        {/*<p className="photobox-two-child"><strong>Scanning in progress..</strong></p>*/}
                        
                    </div>
                </div>

                <div className="licensebox">
                    <p>TP64102</p>
                </div>

                <div style={{marginTop:"280px"}}>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit" value="Continue" onClick={conTinue}>
                            <strong>NEXT</strong>
                        </button>
                    </div>
                </div>

                {/*<div>
                    <p style={{fontSize:"14px", color:"#3887fc"}}>
                        <strong>ENTER MANUALLY INSTEAD</strong>
                    </p>
                </div>*/}
            </div>
        </>
    )

}


