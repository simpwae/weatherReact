import axios from "axios";
import React, { useState } from "react";
import img from "../../public/img.png";

const Layout = () => {
  const cloudy = "/cloudy.png";
  const rain = "/lightRain.png";
  const sunny = "/sunny.png";

  const imagesSrc = (temp) => {
    if (temp > 30) {
      return sunny;
    } else if (temp <= 30) {
      return rain;
    } else {
      return cloudy;
    }
  };

  const [inputCity, setInputCity] = useState(""); // User input

  const [city, setCity] = useState();
  const [feelLike, setFeelLike] = useState();
  const [humidity, setHumidity] = useState();
  const [temp, setTemp] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [minTemp, setMinTemp] = useState();
  const [windSpeed, setWindSpeed] = useState();
  const [weather, setWeather] = useState("second");
  const [weatherIcon, setWeatherIcon] = useState();
  let weatherIconImgUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
  const weatherData = () => {
    const key = "837452185e3c4c64874c17d6aea6bba5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${key}&units=metric`;

    axios
      .get(url)
      .then((response) => {
        setWeather(response.data.weather[0].main);
        setWeatherIcon(response.data.weather[0].icon);
        setFeelLike(response.data.main.feels_like);
        setHumidity(response.data.main.humidity);
        setTemp(response.data.main.temp);
        setMaxTemp(response.data.main.temp_max);
        setMinTemp(response.data.main.temp_min);
        setCity(response.data.name);
        setWindSpeed(response.data.wind.speed);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        alert("City not found!");
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      weatherData();
    }
  };

  return (
    <section className="p-3 text-center text-gray-100 flex justify-center font-medium overflow-y-hidden">
      <div className="w-72 rounded-xl h-[96vh] bg-gray-500 p-3">
        <input
          type="text"
          placeholder="Enter city name"
          className="rounded-xl text-center text-gray-800 bg-gray-200 w-52 px-4 outline-none h-7 my-5"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <img
          src={!weatherIcon ? img : weatherIconImgUrl}
          className="w-36 mx-auto object-cover"
          alt="Weather IMG"
        />
        <h2 className="text-5xl font-semibold">
          {temp}
          <sup>o</sup>C
        </h2>
        <div className="flex justify-between p-5">
          <p>{city}</p>
          <p>{weather}</p>
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
          <div>
            <h4 className="font-semibold text-2xl">{windSpeed}km/h</h4>
            <p className="font-semibold text-1xl">Wind Speed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
