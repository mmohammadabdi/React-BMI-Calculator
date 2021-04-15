import React from 'react'

import { Button } from 'react-bootstrap'
import RenderResult from '../RenderResult/RenderResult'
import './AnswerSide.css'
const AnswerSide = (props) => {

    const bmiReCalculator = () => {
        document.querySelector('#img-animate').style.transform = "translateX(0%)"
        document.querySelector('.question-card').style.opacity = "1"
        document.querySelector('.answer-card').style.opacity = "0"
        document.querySelector('.question-card').style.display = "flex"
        document.querySelector('.answer-card').style.display = "none"
    }




    return (
        <div className="answer-card">
            {props.statusColor}
            <div>
                <RenderResult
                    bmi={props.bmi}
                    healthyBmi={props.healthyBmi}
                    least={props.least}
                    most={props.most}
                    loseWeight={props.loseWeight}
                />
                <Button className="recalculator-btn" onClick={bmiReCalculator}>Recalculate</Button>

            </div>

        </div>
    )
}

export default AnswerSide
