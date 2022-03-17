import React from "react";
import CurrentDisplay from "./CurrentDisplay";
import { useData } from "../context/context";
import styled from "styled-components";

const WeatherCard = styled.div`
  display: flex;
  width: 95%;
  margin: 2% auto;
  padding: 2%;
  background: #fff;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  @media (max-width: 992px) {
    flex-direction: column !important;
  }
`;
const CurrentWeather = (props) => {
  const { data } = useData;

  return (
    <WeatherCard>
      <CurrentDisplay data={data} />
    </WeatherCard>
  );
};

export default CurrentWeather;
