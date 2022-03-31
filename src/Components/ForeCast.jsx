import React from 'react'
import {Forecast,Location,LocationInfo,Heading} from "../Styles/ForeCast.styled";
import { IoLocationSharp } from "react-icons/io5";

function ForeCast() {
  return (
    <Forecast>
        <Heading>forecast</Heading>
        <Location>
          <IoLocationSharp className="LocationSharp" />
          <LocationInfo>
            <p className="indication">Current Location</p>
            <h3 className="city-info">London, England</h3>
          </LocationInfo>
        </Location>
      </Forecast>
  )
}

export default ForeCast