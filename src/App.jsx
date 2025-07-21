import React from "react";
import axios from "axios";
<<<<<<< HEAD
import Layout from "./components/Layout";

const App = () => {
  return (
    <main className="overflow-y-hidden h-screen bg-gray-800">
      <Layout />
    </main>
=======

const App = () => {
  let key = "837452185e3c4c64874c17d6aea6bba5";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Peshawar&appid=${key}`;
  let weatherCall = () => {
    axios
      .get("/user?ID=12345")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={weatherCall}>Click me</button>
    </div>
>>>>>>> origin/Shaheer
  );
};
