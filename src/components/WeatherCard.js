import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';

const WeatherCard = ({dt, temp_min, temp_max,humidity, main,description, icon, cityInfo}) => {
  // create a date object with Date class constructor
  const date = new Date(dt);
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        // get the src from example url and pass the icon prop for icon code
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{cityInfo.name},{cityInfo.country}</Card.Title>
        <ListGroup className="list-group-flush">
        <ListGroupItem>
         <strong>{main} : </strong>{description}
        </ListGroupItem>
        <ListGroupItem>
         {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </ListGroupItem>
        <ListGroupItem>
          Temperature: {Math.round(temp_max - 273.15)} <strong>°C</strong>
        </ListGroupItem>
        <ListGroupItem>
          Humidity: {humidity} %
        </ListGroupItem>
        </ListGroup>
        <Card.Link  target="_blank" href={`https://www.google.com/search?q=`+cityInfo.name+' weather'}>Check the weather on Google</Card.Link>
      </Card.Body>
    </Card>
  );
};
export default WeatherCard;