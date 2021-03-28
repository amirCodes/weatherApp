import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const GetLocation = ({onSearch}) => {
    const [city, setCity] = useState('');

    return (
      <>
        <Row>
          <Col xs={6}>
            <FormControl
              placeholder="Enter city name ..."
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </Col>
          <Col>
            <Button onClick={() => onSearch(city)}>Fetch Weather</Button>
          </Col>
        </Row>
      </>
    );
  };

export default GetLocation;