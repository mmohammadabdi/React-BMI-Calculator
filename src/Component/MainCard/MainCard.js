import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import QuestionSide from "../QuestionSide/QuestionSide"
import AnswerSide from '../AnswerSide/AnswerSide'
import "./MainCard.css"

const MainCard = (props) => {
    const leastNormal = 18.5
    const mostNormal = 24.9
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [bmi, setBmi] = useState(null)
    const [normalRangeWeight, setNormalRangeWeight] = useState({})
    const [loseOrGainWeight, setLoseOrGainWeight] = useState(null)
    const [statusColor, setStatusColor] = useState(null)
    const [trueHeight, setTrueHeight] = useState(null)
    const [trueWeight, setTrueWeight] = useState(null)
    const uiChanger = () => {
        document.querySelector('#img-animate').style.transform = "translateX(-100%)"
        document.querySelector('.question-card').style.opacity = "0"
        document.querySelector('.answer-card').style.opacity = "1"
        document.querySelector('.question-card').style.display = "none"
        document.querySelector('.answer-card').style.display = "flex"
    }
    const weightNormalRange = () => {
        const leastNormalWeight = ((leastNormal * (height ** 2)) / 10000).toFixed(1)
        const mostNormalWeight = ((mostNormal * (height ** 2)) / 10000).toFixed(1)
        setNormalRangeWeight([leastNormalWeight, mostNormalWeight])
        if (weight > parseFloat(mostNormalWeight)) {
            const loseWeight = <li>Lose <b>{(weight - mostNormalWeight).toFixed(1)}</b> kg to reach healthy BMI</li>
            setLoseOrGainWeight(loseWeight)
        } else if (weight < parseFloat(leastNormalWeight)) {
            const gainWeight = <li>Gain <b>{(leastNormalWeight - weight).toFixed(1)}</b> kg to reach healthy BMI</li>
            setLoseOrGainWeight(gainWeight)
        } else {
            setLoseOrGainWeight(null)
        }
    }
    const bmiCalc = () => {
        const finalBmi = ((weight / (height ** 2)) * 10000).toFixed(2)
        setBmi(finalBmi)
        if (finalBmi < 18.5) {
            const underWeight = <div className="red">Underweight</div>
            setStatusColor(underWeight)
        } else if ((18.5 <= finalBmi) && (finalBmi <= 24.9)) {
            const normalWeight = <div className="green">Normal</div>
            setStatusColor(normalWeight)
        } else if ((25 <= finalBmi) && (finalBmi <= 29.9)) {
            const overWeight = <div className="yellow">Overweight</div>
            setStatusColor(overWeight)
        } else if (30 <= finalBmi) {
            const obeseWeight = <div className="red">Obese</div>
            setStatusColor(obeseWeight)
        }
    }

    const bmiCalulator = () => {
        if ((weight > 30) && (weight < 300)) {
            setTrueWeight(null)
            if ((height > 40) && (height < 300)) {
                setTrueHeight(null)
                uiChanger()
                bmiCalc()
                weightNormalRange()
            } else {
                setTrueHeight(<div className={"unvalid"}>Please, Set valid Height number to centimeter.</div>)
            }
        } else {
            setTrueWeight(<div className={"unvalid"}>Please, Set valid weight number to kilograms.</div>)
        }
    }

    return (
        <Container className="container-control">
            <Row className="main-card">
                <Col md={6} >
                    <QuestionSide
                        heightOnChange={(event) => setHeight(event.target.value)}
                        weightOnChange={(event) => setWeight(event.target.value)}
                        bmiCalulator={bmiCalulator}
                        trueHeight={trueHeight}
                        trueWeight={trueWeight}
                    />
                </Col>
                <Col md={6} >
                    <AnswerSide
                        statusColor={statusColor}
                        bmi={bmi}
                        healthyBmi={props.healthyBmi}
                        least={normalRangeWeight[0]}
                        most={normalRangeWeight[1]}
                        loseWeight={loseOrGainWeight}
                    />
                </Col>
                <div id="img-animate" className="img-cover-answer">
                </div>
            </Row>
        </Container >
    )
}
export default MainCard
