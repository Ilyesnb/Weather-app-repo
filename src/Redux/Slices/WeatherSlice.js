import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  WeatherList: [] 
};

const WeatherSlice = createSlice({
  name: "weathers",
  initialState,
  reducers: {
    SaveWeather: (state, action) => {
      state.WeatherList.push(action.payload);
      console.log(action);
    },
  },
});

export const { SaveWeather } = WeatherSlice.actions;
export default WeatherSlice.reducer;
