import React from "react";

const Layout = () => {
  return (
    <section className="p-3 text-center text-gray-100 flex justify-center font-medium overflow-y-hidden">
      <div className="w-72 rounded-xl h-auto bg-gray-500 p-3">
        <input
          type="text"
          className="rounded-xl flex text-gray-800 justify-center mx-auto bg-gray-200 w-52 px-4 outline-none h-7 my-5"
        />
        <img
          src="/img.png"
          className="w-72 h-52 object-cover"
          alt="Weather IMG"
        />
        <h2 className="text-5xl font-semibold">
          30<sup>o</sup>C
        </h2>
        <div className="flex justify-between p-5">
          <p>Location</p>
          <p>Day</p>
        </div>
        <hr />
        <div className="my-4">
          <p>Light Rain</p>
          <p>Min-temperature</p>
          <p>Max-temperature</p>
        </div>
        <div className="bg-gray-700 p-5 flex rounded-lg justify-between">
          <div>
            <div>
              <h4 className="font-semibold text-2xl">83%</h4>
              <p className="font-semibold text-1xl">Humidity</p>
            </div>
          </div>
          <div className="">
            <h4 className="font-semibold text-2xl">6km/h</h4>
            <p className="font-semibold text-1xl">Wind Speed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
