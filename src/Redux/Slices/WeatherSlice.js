import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  WeatherList: [] ,
  Location:"",

};

const WeatherSlice = createSlice({
  name: "weathers",
  initialState,
  reducers: {
    SaveWeather: (state, action) => {
      state.WeatherList.push(action.payload);
      console.log(action);
    },
    SetLocation :(state,action)=>{
      state.Location=action.payload

    }
  },
});

export const { SaveWeather,SetLocation  } = WeatherSlice.actions;
export default WeatherSlice.reducer;
