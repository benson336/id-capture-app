import React, { Component, useCallback, useRef, useState  } from 'react'
import Webcam from "react-webcam";
import axios, { Axios } from 'axios';
import Showphoto from './Showphoto';


export default function Takephoto(props) {

    const [img, setImg] = useState(null);
    
    const videoConstraints = {
        width: 1900,
        height: 1200,
        facingMode: "user"
      };

    const webcamRef = React.useRef(null);
    const capturePhoto = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImg(imageSrc);
        console.log(imageSrc);
        let senddata = {
            apikey:"5RKBVLYJdo4MU4dydKeR4cum85YZYDF3",
            file_base64:imageSrc,
            authenticate:true,
            accuracy:1,
            authenticate_module:2,
            ocr_scaledown:1000,
            disable_barcode: true,
            verify_expiry:true,
            verify_name:true,
        };

        axios.request({
            url: "https://api.idanalyzer.com",
			method: "POST",
			dataType: "json",
			crossDomain: true,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			contentType: "application/json; charset=utf-8",
			data: senddata,
			cache: false,
        }).then(function(response){
            if(response.data.error.message){
                

            }
        })

    },[webcamRef]);
  

    const conTinue = (e) => {
        e.preventDefault();
        //props.nextStep();
        props.storeImg(img);
    }

    const preVious = (e) => {
        e.preventDefault();
        props.prevStep();
    }

    /*console.log({
        ...img
    })*/

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
                        {img === null ? 
                        (
                            <Webcam
                            style={{borderRadius: "8px"}}
                            audio={false}
                            width={310}
                            height={220}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                            />
                        ) : (
                            <img src={img} alt="screenshot" />
                        )
                        
                        }
                    </div>

                    <div className="textcontainer">
                        <h5>Take picture of driver's license</h5>
                        <p style={{fontSize:"12px"}}>Please align ID inside above area and take picture</p>
                        <div style={{marginTop:"35px", fontSize:"80px"}} onClick={capturePhoto}>
                            <i className="bi bi-record-circle"></i>
                        </div>
                        
                    </div>

                </div> 

                <div style={{marginTop:"10px"}}>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit" value="Continue" onClick={conTinue}>
                            <strong>NEXT</strong>
                        </button>
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


                //post base64 image to api to verify dl



    /*function createPost(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    };
        

    async function init(){
        await createPost({title:'one', body:'two'});
        getPost();
    }

    init();*/

