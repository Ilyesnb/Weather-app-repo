import Aos from 'aos'
import "aos/dist/aos.css"
import axios from "axios";
import React,{useEffect,useState} from 'react'
import {Container,Heading,WeatherInfo,DailyInfo,Title,TitleContainer,TodyWeather,InfoContainer,Wall} from "../Styles/Weather.styled"
function Weather() {
  const convertToKm = (aparent) =>{
    return aparent*0.001
  }
  const [forecast, setForecast] = useState({});
  useEffect(() => {
    Aos.init({ duration: 2000 });
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=f45a44472af7bcbb3c8851f4ab70b16d`).then((res) => {
       setForecast(res.data);
       console.log(res.data);
      });
  }, []);
  return (
    <Container>
      <Heading data-aos="zoom-out-right">Today</Heading>
      <WeatherInfo data-aos="zoom-out-right">
        <InfoContainer>
          <TodyWeather>
            {forecast.main ? <p style={{fontSize:"35px"}}>{forecast.main.temp.toFixed()}°F</p>  : null}
            {forecast.weather ? <img src="http://openweathermap.org/img/wn/.png" alt=""/>: null}
          </TodyWeather>
            <Wall/>
          <TitleContainer>
            {forecast.main ? <Title>Temp Max: {forecast.main.temp_max.toFixed()}°F </Title> : null}
            {forecast.main ? <Title>Temp Min: {forecast.main.temp_min.toFixed()}°F </Title> : null}
            {forecast.main ? <Title>Humidity: {forecast.main.humidity}% </Title> : null}
            {forecast.wind ? <Title>Wind Speed: {forecast.wind.speed.toFixed()}MPH </Title> : null}
            {forecast.clouds ? <Title>Cloud All: {forecast.clouds.all}% </Title> : null}
            {forecast.visibility ? <Title>Visibility: {convertToKm(forecast.visibility)}km </Title> : null}
          </TitleContainer>
        </InfoContainer>
      </WeatherInfo>
      <DailyInfo data-aos="zoom-out-right">Daily</DailyInfo>
    </Container>
  );
}

export default Weather;