

  import React from 'react';
  import './App.css';
  import {Container} from 'react-bootstrap';
  import {API_KEY, API_BASE_URL} from './utils/config'
  import WeatherList from './components/WeatherList';
  import GetLocation from './components/GetLocation';
  import FetchDara from './components/FetchData';

  const App = () => {
    // call our API and and fetch our data 
    const {data, error, isLoading, setUrl} = FetchDara();
    //  Check(error/success) and display our fetched data 
    const getData = () => {
      if(error) return <h2 style={{color:'red'}}>Error: {error}</h2>
      if(!data && isLoading) return <h2>Loading...</h2>
      if(!data) return null;
      console.log(data.list)
      // pass our data after fetching to the weather list component
      return <WeatherList weathers={data.list} />
    };
  
    return (
    <div className="container">
    <div className="search-container">
      {/* disply input option for UI */}
      {/* <GetLocation onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?id=524901&q=${city}&cnt=5&appid=${API_KEY}`)} /> */}
      
      {/* changed this because the api is not responding on live demo (netlify) */}
    <GetLocation onSearch={(city) => setUrl(`http://api.openweathermap.org/data/2.5/forecast?id=524901&q=${city}&cnt=5&appid=a0c3e2cff8edd3613ab360e2619635cb`)} />

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