import React from "react";

const Layout = () => {
  return (
    <section className="p-3 text-center flex justify-center">
      <div className="w-72 rounded-xl h-screen bg-gray-500 p-3">
        <input
          type="text"
          className="rounded-xl flex justify-center mx-auto bg-gray-200 w-52 px-4 outline-none h-7 my-5"
        />
        <img src="" alt="Weather IMG" />
        <h2>TEMP</h2>
        <div className="flex justify-between p-5">
          <p>location</p>
          <p>day</p>
        </div>
        <hr />
        <div>
          <p>text</p>
          <p>text</p>
          <p>text</p>
        </div>
        <div className="bg-gray-700 p-5 flex justify-between">
          <div>
            <div>
              <h4>percentage</h4>
              <p>humidity</p>
            </div>
          </div>
          <div className="">
            <h4>km/h</h4>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
