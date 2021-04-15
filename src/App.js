import React from 'react'
import { Container, Card } from 'react-bootstrap'
import MainCard from './Component/MainCard/MainCard'

import './App.css'
const App = () => {
    return (
        <Container fluid className="background" width="100%" >
            <h1 className="head-intro text-center">Adult BMI Calculator</h1>
            <MainCard />
        </Container  >
    )
}

export default App


