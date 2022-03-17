import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DayDetails from "./DayDetails";
import styled from "styled-components";
import apiKey from "../api";

const DayDiv = styled.div`
 
  padding: 1% 1%;

 
  flex:1;
`;

const DayDivs = styled.div`
  width: 95%;
 
  margin: 0 auto;
  padding: 4% 0;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  flex: 1;
  border: 1px solid gray;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

function useOpenWeather({ ApiKey, units = "metric", latt, long }) {
  const [apiData, setApiData] = useState(null);

  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latt}&lon=${long}&appid=${ApiKey}&units=${units}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
      });
  }, [apiUrl]);

  return apiData;
}

function UpcomingWeather({day}) {

  const {lat, lon } = useParams();
  const latt = lat.substring(1);
  const long = lon.substring(1);

  const weather = useOpenWeather({
    ApiKey: apiKey,
    latt,
    long,

    units: "metric",
  });





  return (
    <DayDivs>
      {weather &&
        weather.daily.slice(0, 5).map((d) => (
          <DayDiv>
            <DayDetails key={d.dt} day={d} />
            <img
              src={`http://openweathermap.org/img/w/${d.weather[0].icon}.png`}
              alt={d.weather[0].main}
            />
          
            <div>
              {Math.round(d.temp.max)} ° / {Math.round(d.temp.min)} °
            </div>
          </DayDiv>
        ))}
    </DayDivs>
  );
}

export default UpcomingWeather;
