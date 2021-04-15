import React, { useState } from 'react'
import { Button, Col, Row } from "react-bootstrap"

import './QuestionSide.css'

const QuestionSide = (props) => {
    return (
        <div className="question-card">
            <label>Weight<input onChange={props.weightOnChange} type="number" placeholder="kg"></input>{props.trueWeight}</label>
            <label>Height<input onChange={props.heightOnChange} type="number" placeholder="cm"></input>{props.trueHeight}</label>
            <Button id="calculate" onClick={props.bmiCalulator}>Calculat</Button>
        </div>
    )
}
export default QuestionSide




