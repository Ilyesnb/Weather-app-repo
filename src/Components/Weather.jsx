import Aos from 'aos'
import "aos/dist/aos.css"
import axios from "axios";
import React,{useEffect,useState} from 'react'
import {Container,Heading,WeatherInfo,DailyInfo,Title,TitleContainer,TodyWeather,InfoContainer,Wall,WeatherImg,WeatherIcons} from "../Styles/Weather.styled"
function Weather({l}) {
  const convertToKm = (aparent) =>{
    return Math.round(aparent*0.001)
  }
  const [forecast, setForecast] = useState({});
  useEffect(() => {
    Aos.init({ duration: 2000 });
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${l}&units=metric&appid=f45a44472af7bcbb3c8851f4ab70b16d`).then((res) => {
       setForecast(res.data);
      //  console.log(res.data);
      });
  }, []);
  const dateBuilder = (d) =>{
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`

  }
  return (
    <Container>
      <Heading data-aos="zoom-out-right">Today</Heading>
      <WeatherInfo data-aos="zoom-out-right">
        <InfoContainer>
          <TodyWeather>
            {forecast.main ? <p style={{fontSize:"35px",textAlign:"center"}}>{forecast.main.temp.toFixed()}°C</p>  : null}
            <WeatherIcons>
            {forecast.weather ? <h2 style={{textAlign:"center",marginTop:"-20px"}}>{forecast.weather[0].main}</h2> : null}
            {forecast.weather ? <WeatherImg src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png`} alt={`${forecast.weather[0].description}`}/> : null}
            </WeatherIcons>
            <div>{dateBuilder(new Date())}</div>
          </TodyWeather>
            <Wall/>
          <TitleContainer>
            {forecast.main ? <Title>Temp Max: {forecast.main.temp_max.toFixed()}°C </Title> : null}
            {forecast.main ? <Title>Temp Min: {forecast.main.temp_min.toFixed()}°C </Title> : null}
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