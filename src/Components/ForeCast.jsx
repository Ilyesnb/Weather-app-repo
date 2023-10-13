import React,{useEffect,useState} from 'react'
import {Forecast,Location,LocationInfo,Heading} from "../Styles/ForeCast.styled";
import { IoLocationSharp } from "react-icons/io5";
import axios from "axios"

function ForeCast() {
  // const test = ()=> {
  //   if()

  // }
  const [city, setCity] = useState({})
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=f45a44472af7bcbb3c8851f4ab70b16d`).then((res) => {
        setCity(res.data);
        console.log( res.data);
      });
  }, []);
  return (
    <Forecast>
        <Heading>forecast</Heading>
        <Location>
          <IoLocationSharp className="LocationSharp" />
          <LocationInfo>
            <p className="indication">Current Location</p>
            {city.sys? <h3 className="city-info">{city.name},{city.sys.country}</h3>: "no location"}
          </LocationInfo>
        </Location>
      </Forecast>
  )
}

export default ForeCast