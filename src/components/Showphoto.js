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

    console.log(props.values)

    return (      
        <>
            <div className="container">

                <div className="scanlicenseArrow" onClick={preVious}>
                    <i className="bi bi-arrow-left-short"></i>
                </div>

                <div className="scanlicenseTextAll">
                    <h3>Driver's License</h3>
                    <div className="scanlicensePara">
                        <p>Ask driver for driver's license and take a photo to collect information.
                        </p>
                    </div>
                </div>

                <div className="photobox">
                    <div className="photobox-two">
                    <img src={props.values.photo} alt="screenshot" />
                    </div>
                </div>

                <div onClick={preVious}>
                    <p style={{fontSize:"15px", color:"#3887fc"}}>
                        <strong>RETAKE</strong>
                    </p>
                </div>

                <div className="scanInfo">
                    <h6>Scanned Information</h6>
                    <p style={{fontSize: "15px", color:"#3887fc"}}><strong>Edit</strong></p>
                </div>

                <div class="idBox">
                    <div class="idBoxTwo">
                        <div style={{width:"70px", height:"70px", backgroundColor:"#42c8f5", paddingTop:"20px"}}>
                            <i class="bi bi-person-bounding-box"></i>
                        </div>
                    </div>
                    <div class="idBoxThree">
                        <div>
                            <p style={{fontSize:"12px", color:"grey"}}>Last</p>
                            <p style={{fontSize:"14px"}}>Wen</p>
                        </div>
                        <div>
                            <p style={{fontSize:"12px", color:"grey"}}>DOB</p>
                            <p style={{fontSize:"14px"}}>02/03/1999</p>
                        </div>
                    </div>
                    <div class="idBoxFour">
                        <div>
                            <p style={{fontSize:"12px", color:"grey"}}>First</p>
                            <p style={{fontSize:"14px"}}>Chaopin</p>
                        </div>
                        <div>
                            <p style={{fontSize:"12px", color:"grey"}}>DL</p>
                            <p style={{fontSize:"14px"}}>#123455</p>
                        </div>
                       
                    </div>
                </div>

                <div style={{marginTop:"150px"}}>
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
