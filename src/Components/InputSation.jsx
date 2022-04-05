import React,{useState} from "react";
import { Container,Heading,Input,Wall,InputSearch,Form} from "../Styles/InputSaction.styled";
import { FaSearchLocation } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { SaveWeather } from "../Redux/Slices/WeatherSlice";

const InputSation = () => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const handelSubmit = (event) => {
    event.preventDefault();
    console.log(`Adding ${location}`);
    dispatch(
      SaveWeather({
        add: location,
        done: false,
        id: Date.now(),
      })
    );
    setLocation("")
  };
  const handelChange = (event) => {
    setLocation(event.target.value);
   
  };
  return (
    <Container>
      <Heading>The Only Weather Forecast You Need</Heading>
      <Wall />
      <InputSearch>
        <FaSearchLocation className="SearchLocation" />
        <Form onSubmit={handelSubmit}>
          <Input
            onChange={handelChange}
            type="text"
            placeholder="Enter Location"
            required
            value={location}
          />
        </Form>
      </InputSearch>
    </Container>
  );
};

export default InputSation;
