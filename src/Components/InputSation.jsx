import React from "react";
import { Container,Heading,Input,Wall,InputSearch} 
from "../Styles/InputSaction.styled";
import { FaSearchLocation } from "react-icons/fa";

function InputSation() {
  return (
    <Container>
      <Heading>The Only Weather Forecast You Need</Heading>
      <Wall />
      <InputSearch>
        <FaSearchLocation className="SearchLocation"/>
        <Input type="text" placeholder="Enter Location" required />
        
      </InputSearch>
    </Container>
  );
}

export default InputSation;
