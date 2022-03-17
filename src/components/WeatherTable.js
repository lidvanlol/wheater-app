import React from "react";
import styled from "styled-components";
import CurrentWeather from "./CurrentWeather";
import { useData } from "../context/context";

const WeatherCard = styled.div`
  width: 95%;
  margin: 2% auto;
  padding: 1%;
  background: #fff;
  display:flex;
  flex-direction:row;
 
`;
const SearchInstructions = styled.h3`
  margin: auto;
  padding: 5%;
  font-size: 1.3rem;
`;

const WeatherTable = () => {
  const { data } = useData();
  return (
    <div>
      {data ? (
        <WeatherCard>
          <CurrentWeather data={data} />
        
        </WeatherCard>
      ) : (
        <SearchInstructions>
          Search your city for weather info
        </SearchInstructions>
      )}
    </div>
  );
};

export default WeatherTable;
