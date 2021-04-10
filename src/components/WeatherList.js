import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'
const WeatherList = ({weathers, cityData}) => {
    return (
        <Row>
           {weathers.map(({dt,main, weather}) => (
                <Col key={dt}>
                    {/* pass weather data to weather card */}
                    <WeatherCard cityInfo={cityData} temp_max={main.temp_max} temp_min={main.temp_min} dt={dt * 1000} main={weather[0].main} humidity={main.humidity} description={weather[0].description} icon={weather[0].icon}/>
                </Col>
            ))} 
        </Row>
    )
}

export default WeatherList;