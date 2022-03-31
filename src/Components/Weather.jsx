import Aos from 'aos'
import "aos/dist/aos.css"
import React,{useEffect} from 'react'
import {Container,Heading,WeatherInfo,DailyInfo} from "../Styles/Weather.styled"
function Weather() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <Container>
        <Heading>Today</Heading>
        <WeatherInfo>

        </WeatherInfo>
        <DailyInfo>Daily</DailyInfo>
    </Container>
  )
}

export default Weather