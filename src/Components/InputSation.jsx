import React,{useState,useEffect} from "react";
import { Container,Heading,Input,Wall,InputSearch,Form} from "../Styles/InputSaction.styled";
import { FaSearchLocation } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { SaveWeather } from "../Redux/Slices/WeatherSlice";
import axios from "axios"

const InputSation = () => {
  const [location, setLocation] = useState("");
  const [nodata, setNodata] = useState([])
  const dispatch = useDispatch();
  const handelSubmit = (event) => {
    event.preventDefault();
    // console.log(`Adding ${location}`);
    dispatch(
      SaveWeather({
        add: location,
        done: false,
        id: Date.now(),
      })
    );
    setLocation("")
  }
  const handelChange = (event) => {
    setLocation(event.target.value);
    
  };
  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location ? location : "london"}&units=metric&appid=f45a44472af7bcbb3c8851f4ab70b16d`).then((res) => {
      setNodata(res.data);
      //  console.log(res.data);
      });
  },[])
  
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
