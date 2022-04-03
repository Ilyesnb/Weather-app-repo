import Aos from 'aos'
import "aos/dist/aos.css"
import axios from "axios";
import React,{useEffect,useState} from 'react'
import {Container,Heading,WeatherInfo,DailyInfo,Title,TitleContainer,TodyWeather,InfoContainer} from "../Styles/Weather.styled"
function Weather() {
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    Aos.init({ duration: 2000 });
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=f45a44472af7bcbb3c8851f4ab70b16d`).then((res) => {
       setForecast(res.data);
      //  console.log(res.data);
      });
  }, []);
  return (
    <Container>
      <Heading data-aos="zoom-out-right">Today</Heading>
      <WeatherInfo data-aos="zoom-out-right">
      {/* <div>
          {forecast.map((item,index)=>(
            <div key={index}>
              <p>{item.visibility}</p>
            </div>
          ))}
        </div> */}
        <InfoContainer>
          <TodyWeather>
            <p>35°</p>
          </TodyWeather>
          <TitleContainer>
            <Title>temp max:</Title>
            <Title>Humidity: </Title>
            <Title>UV Index: </Title>
            <Title>Cloud Couver: </Title>
            <Title>Visibility: </Title>
            <Title>sunset: </Title>
          </TitleContainer>
        </InfoContainer>
      </WeatherInfo>
      <DailyInfo data-aos="zoom-out-right">Daily</DailyInfo>
    </Container>
  );
}

export default Weather;