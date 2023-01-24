import React, { Component, useCallback, useRef, useState  } from 'react'
import Webcam from "react-webcam";
import axios, { Axios } from 'axios';


export default function Showphoto(props) {
    

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
                    <h3>Driver's License</h3>
                    <div className="scanlicensePara">
                        <p>Check and confirm that the scanned license plate matches the real one.
                            If the plates don't match, manually enter the correct number.
                        </p>
                    </div>
                </div>

                <div className="photobox">
                    <div className="photobox-two">
                        <div className="camera" onClick={conTinue}>
                            <i className="bi bi-camera"></i>
                        </div>
                        <p className="photobox-two-child"><strong>Scanning in progress..</strong></p>
                    </div>
                </div>

                <div className="licensebox">
                    <p>TP64102</p>
                </div>

                <div style={{marginTop:"250px"}}>
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