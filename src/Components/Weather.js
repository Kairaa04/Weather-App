import React, { useState } from "react";
import logo from "./weather.png";
import axios from "axios";

function Weather() {
  const [input, setInput] = useState("");
  const [data, setData] = useState({});
  const fetchData = (cityName) => {
    if (!cityName) return;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b22ef5760eab6eff9f0f86a5899b2bf4`
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClick = () => {
    fetchData(input);
    console.log("hello");
  };
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5rem",
        }}
      >
        <img
          src={logo}
          alt=""
          style={{
            borderRadius: "15px",
            position: "relative",
            height: "30rem ",
          }}
        />
        <input
          type="search"
          style={{
            height: "1.6rem",
            position: "absolute",
            marginTop: "-10rem",
            background: "transparent",
            borderColor: "seagreen",
            borderRadius: "2px",
            width: "8.2rem",
            marginRight: "6rem",
            fontFamily: "monospace",
          }}
          onChange={(e) => {
            setInput(e.target.value);
            console.log(input);
          }}
          placeholder="Search Location"
        />
        <button
          style={{
            position: "absolute",
            marginTop: "-10rem",
            background: "transparent",
            borderColor: "white",
            borderRadius: "2px",
            marginLeft: "6rem",
            borderColor: "seagreen",
          }}
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search-heart"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
            <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
          </svg>
        </button>
        {Object.keys(data).length > 0 && (
          <>
            <h2
              style={{
                position: "absolute",
                marginTop: "0rem",
                fontFamily: "monospace",
              }}
            >
              {data.name}
            </h2>
            <h1 style={{ position: "absolute", marginTop: "4rem" }}>
              {(data.main.temp - 273.15).toFixed(2)}°C
            </h1>
            {data?.weather?.map((i) =>{
                return  <h3
                style={{
                  position: "absolute",
                  marginTop: "7.5rem",
                  fontFamily: "monospace",
                }}
              >  {i.main} 
              </h3>
                
              })}
           
          </>
        )}
      </div>
    </>
  );
}

export default Weather;
