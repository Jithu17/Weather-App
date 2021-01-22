import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Container } from "reactstrap";
import Temperature from './Temperature';

const forecastApi = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/`;

const Forecast = (props) => {

    const [forecastData, setForecastData] = useState(null);
    
    //Call the Api when location is selected
    useEffect(() => {
        if(props.selectedValue !== null){
            getForecast(props.selectedValue.woeid);
        }
    }, [props.selectedValue]);


    //function to call the api and set the state with the response
    const getForecast = async(woeid) => {
        const res = await axios.get(`${forecastApi}${woeid}`);
        console.log(res.data);
        let filteredData = res.data.consolidated_weather.slice(0, 5);
        setForecastData(filteredData);
    }

    return (
        <>
        {forecastData !== null && <Container>
             <Row>
                {forecastData.map((tempData) => {
                    return (
                        <Temperature data={tempData} />
                    )
                })}
            </Row>
        </Container>}
        </>
        
    )

}

export default Forecast;