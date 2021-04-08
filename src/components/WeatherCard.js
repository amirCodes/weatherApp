import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({dt, temp_min, temp_max,humidity, main,description, icon}) => {
  // create a date object with Date class constructor
  const date = new Date(dt);

  return (
    <Card>
      <Card.Img
        variant="top"
        // get the src from example url and pass the icon prop for icon code
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        {/* minimum temperature */}
        <p>Temperatur Min: {Math.round(temp_min - 273.15)} °C</p>
        {/* maximum temperature */}
        <p>Temperature Max: {Math.round(temp_max - 273.15)} °C</p>
        <p>Humidity: {humidity} %</p>
      </Card.Body>
    </Card>
  );
};
export default WeatherCard;