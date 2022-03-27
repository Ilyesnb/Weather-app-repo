import styled from "styled-components";
export const Container = styled.div`
  width:730px;
  text-align: center;
  position: absolute;
  left: 3%;
  top: 38%;
`;
export const Heading = styled.h1`
  font-size: 30px;
  color: white;
  text-shadow: 2px 2px 8px black;
`;
export const Wall = styled.hr`
  width: 200px;
  border: solid 4px white;
  border-radius: 20px;
`;
export const Input = styled.input`
  &::placeholder {
    color: black;
    text-shadow: 2px 2px 8px white;
  }
  font-family: "Nokora", sans-serif;
  margin-top: 10px;
  border-style: none;
  opacity: 0.4;
  background-color: white;
  padding-top: 11px;
  width:45%;
  padding-bottom: 11px;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 43px;
  outline: none;
  box-shadow: 0 2px 7px 2px black;
  align-items: center;
  margin-right:25px;
`;
export const InputSearch =styled.div`

`
