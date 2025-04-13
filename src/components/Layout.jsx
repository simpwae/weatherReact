import axios from "axios";
import React, { useState } from "react";

const Layout = () => {
  const [searchCity, setSearchCity] = useState("London");

  setSearchCity(() => {});

  const [location, setLocation] = useState();
  const [feelLike, setFeelLike] = useState();
  const [humidity, setHumidity] = useState();
  const [temp, setTemp] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [minTemp, setMinTemp] = useState();
  const [windSpeed, setWindSpeed] = useState();
  let city = searchCity;
  let weatherData = () => {
    let key = "837452185e3c4c64874c17d6aea6bba5";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios
      .get(url)
      .then(function (response) {
        // handle success
        setFeelLike(response.data.main.feels_like);
        setGroundLevel(response.data.main.grnd_like);
        setHumidity(response.data.main.humidity);
        setPressure(response.data.main.pressure);
        setSeaLevel(response.data.main.sea_level);
        setTemp(response.data.main.temp);
        setMaxTemp(response.data.main.temp_max);
        setMinTemp(response.data.main.temp_min);
        setCity(response.data.name);
        setWindSpeed(response.data.wind.speed);

        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <section className="p-3 text-center text-gray-100 flex justify-center font-medium overflow-y-hidden">
      <div className="w-72 rounded-xl h-[96vh] bg-gray-500 p-3">
        <input
          type="text"
          className="rounded-xl flex text-gray-800 justify-center mx-auto bg-gray-200 w-52 px-4 outline-none h-7 my-5"
          value={setSearchCity}
        />
        <img
          src="/img.png"
          className="w-36 mx-auto object-cover"
          alt="Weather IMG"
        />
        <h2 className="text-5xl font-semibold">
          {temp}
          <sup>o</sup>C
        </h2>
        <div className="flex justify-between p-5">
          <p>{location}</p>
          <p>Day</p>
        </div>
        <hr />
        <div className="my-4">
          <p className="flex justify-between">
            <span>Feels Like:</span> {feelLike}
          </p>
          <p className="flex justify-between">
            <span>Min-Temp:</span> {minTemp}
          </p>
          <p className="flex justify-between">
            <span>Max-Temp:</span> {maxTemp}
          </p>
        </div>
        <div className="bg-gray-700 p-5 flex rounded-lg justify-between">
          <div>
            <div>
              <h4 className="font-semibold text-2xl">{humidity}%</h4>
              <p className="font-semibold text-1xl">Humidity</p>
            </div>
          </div>
          <div className="">
            <h4 className="font-semibold text-2xl">{windSpeed}km/h</h4>
            <p className="font-semibold text-1xl">Wind Speed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
