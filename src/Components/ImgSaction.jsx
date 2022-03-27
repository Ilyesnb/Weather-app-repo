import React from "react";
import {Container,Img,Forcast,Location,LocationInfo,Heading} from "../Styles/ImgSaction.styled";
import BackgroundImg from "../images/lake-background.jpg";
import { IoLocationSharp } from "react-icons/io5";
function ImgSaction() {
  return (
    <Container>
      <Img src={BackgroundImg} alt="la nature" />
      <Forcast>
        <Heading>forecast</Heading>
        <Location>
          <IoLocationSharp className="LocationSharp" />
          <LocationInfo>
            <p style={{fontSize: "14px"}}>Current Location</p>
            <h3 style={{fontSize: "18px"}}>London, England</h3>
          </LocationInfo>
        </Location>
      </Forcast>
    </Container>
  );
}

export default ImgSaction;
