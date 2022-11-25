import React from "react";
import weather from '../Jpg/weather.jpg'
import {
  UilArrowUp,
  UilArrowDown,
  UilTear,
  UilWind,
  UilTemperature,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy</p>
      </div>
      <div className="flex flex-row items-center justify-between py-3 text-white">
        <img
          src={weather}
          alt=""
          className="w-20"
        />
        <p className="text-5xl">34°</p>
        <p className="text-5xl">AQI: </p>
        <div className="flex flex-col space-y-2">
          <div className="flex text-sm font-light items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">32°</span>
          </div>
          <div className="flex text-sm font-light items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">65%</span>
          </div>
          <div className="flex text-sm font-light items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center text-sm text-white space-x-2 py-3">
        <UilSun/>
        <p className="font-light">
        Rise: <span className="font-medium ml-1">06:45 AM</span></p>
        <p className="font-light">|</p>
        <UilSunset/>
        <p className="font-light">
        Set: <span className="font-medium ml-1">07:45 AM</span></p>
        <p className="font-light">|</p>
        <UilSun/>
        <p className="font-light">
        High: <span className="font-medium ml-1">48°</span></p>
        <p className="font-light">|</p>
        <UilSun/>
        <p className="font-light">
        Low: <span className="font-medium ml-1">45°</span></p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
}

export default TemperatureDetails;
