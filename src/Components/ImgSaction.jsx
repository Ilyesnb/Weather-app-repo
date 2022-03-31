import React from "react";
import {Container,Img} from "../Styles/ImgSaction.styled";
import BackgroundImg from "../images/lake-background.jpg";
import Weather from "./Weather";
import ForeCast from "./ForeCast";
function ImgSaction() {
  return (
    <Container>
        <Img src={BackgroundImg} alt="la nature" />
        <ForeCast />
        <Weather />
    </Container>
  );
}

export default ImgSaction;
