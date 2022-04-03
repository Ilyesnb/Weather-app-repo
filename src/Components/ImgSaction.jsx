import React from "react";
import {Container,Img} from "../Styles/ImgSaction.styled";
import BackgroundImg from "../images/lake-background.jpg";
import Weather from "./Weather";
import ForeCast from "./ForeCast";
import { useSelector } from "react-redux"
function ImgSaction() {
  const WeatherApp = useSelector(state => state.weathers.WeatherList)
  return (
    <Container>
      <Img src={BackgroundImg} alt="la nature" />
      <ForeCast/>
      {
        WeatherApp.map(index =>(
          <Weather key={index.id} />

        ))
      }
    </Container>
  );
}

export default ImgSaction;
