import React from 'react'
import './RenderResult.css'
const RenderResult = (props) => {
    return (
        <ul className="result-ul">
            <li>Your BMI: <b>{props.bmi}</b></li>
            <li>Healthy BMI range: <b>18.5</b> to <b>24.9</b> </li>
            <li>Healthy weight range:<b> {props.least}</b> to <b>{props.most}</b> kilograms.</li>
            {props.loseWeight}
        </ul>
    )
}

export default RenderResult
