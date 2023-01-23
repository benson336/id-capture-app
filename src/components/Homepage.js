import React, { Component, useState } from 'react'
import Scanlicense from './Scanlicense'
import Takephoto from './Takephoto'
import Checkin from './Checkin'
//import Confirm from './Confirm'
//import Success from './Success'

export default function Homepage() {

    const [state, setState] = useState({
        step:1,
        
    });

    const nextStep = () => {
        const { step } =  state;
        setState({
            step: step + 1
        });
    }

     const prevStep = () => {
        const { step } =  state;
        setState({
            step: step - 1
        });
    }

    const handleChange = (e) => {
        setState({[e.target.name]: e.target.value})
    }
    

    switch(state.step){
        case 1:
            return (
                <Checkin
                nextStep={nextStep}
                handleChange={handleChange}
                values={state}
                />
            )
        case 2:
            return (
                <Scanlicense
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
                values={state}
                />
            )
        case 3:
            return (
                <Takephoto
                nextStep={nextStep}
                prevStep={prevStep}
                values={state}
                />
            )
        /*case 4:
            return (
                <Success />
            )*/

        default:
            return <h1>default</h1>
    }
}


