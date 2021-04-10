  import React, { useState } from 'react';
  import './App.css';
  import {Container} from 'react-bootstrap';
  import {API_KEY, API_BASE_URL} from './utils/config'
  import WeatherList from './components/WeatherList';
  import GetLocation from './components/GetLocation';
  import FetchDara from './components/FetchData';
  // "lint": "eslint src/**/*.js src/**/*.jsx" //npm run lint
  const App = () => {
    // call our API and and fetch our data 
    const {data, error, isLoading, setUrl} = FetchDara();
    //  Check(error/success) and display our fetched data 
    const getData = () => {
      if(error) return <h2 style={{color:'red'}}>Error: {error}</h2>
      if(!data && isLoading) return <h2>Loading...</h2>
      if(!data) return null;

      // pass our data after fetching to the weather list component
      return <WeatherList weathers={data.list} cityData={data.city} />
    };
  
    return (
    <div className="container">
    <div className="search-container">
      {/* disply input option for UI */}
      <GetLocation onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?id=524901&q=${city}&cnt=5&appid=${API_KEY}`)} />
    </div>
    <div className="card-container">
      {/* disply Result */}
    <Container fluid="md">
        {/* conditionally render  */}
        {getData()}
      </Container>
    </div>
    </div>
    );
  };
  
  export default App;