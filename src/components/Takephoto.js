import React, { Component, useCallback, useRef, useState  } from 'react'
import Webcam from "react-webcam";
import axios, { Axios } from 'axios';


export default function Takephoto(props) {

    const [img, setImg] = useState(null);
    
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };

    const webcamRef = React.useRef(null);
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImg(imageSrc);
        console.log(imageSrc);
        let senddata = {
            "apiKey":"HqzOCmIYgYk8h8cU4ohwyTfDNUaNmb6I",
            "file_base64":imageSrc,
            "authenticate":"true",
            "authenticate_module":"2",
            "verify_expiry":"true",
        };

        axios.request({
            url: "https://api.idanalyzer.com",
			method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: senddata
        }).then(function(response){
            console.log(response.data);
        })

    },[webcamRef]);
  

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
        <div>
            {/*<div className="boxoverlay" style={{zIndex:"20", opacity:"0.1", position:"relative"}}> </div>*/}
            <div className="container">
                <div className="scanlicenseArrow" onClick={preVious}>
                    <i className="bi bi-arrow-left-short lg"></i>
                </div>

                <div className="imagecontainer">

                    {/*<div className="idcontainer">
                    </div>*/}

                    <img src="truck2.jpg" width="350" height="690" 
                    style={{border:"3px solid #1d8fdb", opacity:"0.3"}}/>
                    
                    <div className="idcontainer">
                            <Webcam
                            style={{borderRadius: "8px", borderRadius:"35px"}}
                            audio={false}
                            width={310}
                            height={220}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                            />
                    </div>

                    <div className="textcontainer">
                        <h5>Take picture of driver's license</h5>
                        <p style={{fontSize:"12px"}}>Please align ID inside above area and take picture</p>
                        <div style={{marginTop:"35px", fontSize:"80px"}}>
                            <i className="bi bi-record-circle"></i>
                        </div>
                        
                    </div>

                    

                   
                
                </div> 


            </div> 
        </div>
        </>
    )

}

{/*{img === null ? (
                    <>
                        <div style={{maxWidth:"380px", backgroundColor:"grey", padding:"20px"}}>
                            <Webcam
                            style={{borderRadius: "8px"}}
                            audio={false}
                            height={200}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={350}
                            videoConstraints={videoConstraints}
                            />
                        </div>
                        
                        
                        <div className="d-grid gap-2 ">
                            <button class="btn btn-primary" type="button" onClick={capture}>Capture photo</button>
                        </div>
                        
                    </>
                ) : (
                    <>
                        <img src={img} alt="screenshot" height="200" width="350"/>
                    
                        <div className="d-grid gap-2">
                            <button class="btn btn-primary" onClick={() => setImg(null)}>Retake</button>
                        </div>
                    </>
                )}*/}