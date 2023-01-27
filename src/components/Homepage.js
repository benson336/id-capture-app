import React, { Component, useState } from 'react'
import Scanlicense from './Scanlicense'
import Takephoto from './Takephoto'
import Checkin from './Checkin'
import Showphoto from './Showphoto'
//import Confirm from './Confirm'
//import Success from './Success'

export default function Homepage() {

    const [state, setState] = useState({
        step:1,
        photo:"",
    });

    const nextStep = () => {
        setState({
            ...state,
            step: state.step + 1
        });
    }

     const prevStep = () => {
        setState({
            ...state,
            step: state.step - 1
        });
    }

    const storeImg = (img) => {
        //console.log(img);
        setState({
            ...state,
            step: state.step + 1,
            photo: img,
        });
    }

    /*const handleChange = (e) => {
        setState({[e.target.name]: e.target.value})
    }*/

    console.log({
        ...state
    });
    

    switch(state.step){
        case 1:
            return (
                <Checkin
                nextStep={nextStep}
                values={state}
                //handleChange={handleChange}
                />
            )
        case 2:
            return (
                <Scanlicense
                nextStep={nextStep}
                prevStep={prevStep}
                values={state}
                //handleChange={handleChange}
                />
            )
        case 3:
            return (
                <Takephoto
                nextStep={nextStep}
                prevStep={prevStep}
                storeImg={storeImg}
                values={state}
                />
            )
        case 4:
            return (
                <Showphoto
                nextStep={nextStep}
                prevStep={prevStep}
                values={state}
                />
            )

        default:
            return <h1>Default Page</h1>
    }
}


