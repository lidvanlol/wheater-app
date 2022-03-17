import React from "react";
import styled from "styled-components";

import { useData } from "../context/context";
import { Link } from "react-router-dom";
const DescriptionIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 15px;

  margin-left: 30px;
  float: left;
  @media (max-width: 992px) {
  float:none;
  margin-left:0;
  }
`;

const WeatherInfo = styled.span`
  color: #fff;
  font-size: 16px;
  padding: 5px;
  margin-right: 5px;
  background: #4e4d4a;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
`;

const CityRaw = styled.div`
  font-size: 20px;

  padding-top: 24px;
 
  @media (max-width: 992px) {
    float: none;
    margin-left: 0;
    font-size:16px;
  }
`;

const State = styled.div`
  margin-top: 30px;
 
  @media (max-width: 992px) {
    float: none;
    margin-left: 0;
    font-size: 14px;
  }
`;

const StyledLink = styled(Link)`
 color: #ea7963;
    &&& {
    &:hover,
    :active,
    :focus {
      color: #ea7963 ;
    }
`;




const Coords = styled.div`
  margin-top: 30px;
  color: #ea7963;
 
  margin-bottom: 20px;
   @media (max-width: 992px) {
  float:none;
  margin-left:0;
  font-size:14px;
`;

const DisplayDiv = styled.div`
  width: 100%;
`;



const CurrentDisplay = (props) => {
  const { data } = useData();

  const lat = data.city.coord.lat;

  const lon = data.city.coord.lon;


  const tmain = (data.list[0].main.temp).toFixed(1);
  


  return (
    <DisplayDiv>
      <CityRaw>
        <StyledLink to={`/upk/:${lat}/:${lon}`}>
          {data.city.name}, {data.city.country}
        </StyledLink>{" "}
        {data.list[0].weather[0].description}
      </CityRaw>

      <DescriptionIcon
        src={`http://openweathermap.org/img/w/${data?.list[0].weather[0].icon}.png`}
        alt="weather icon"
      />
      <State>
        <WeatherInfo>{tmain} °C</WeatherInfo>
        <span>temperature from </span>
        <span>{(data.list[0].main.temp_min).toFixed(1)}</span>
        <span> to </span>
        <span>{(data.list[0].main.temp_max).toFixed(1)} °C, </span>
        <span> wind: {(data.list[0].wind.speed).toFixed(2)} m/s </span>
        <span>clouds {data.list[1].clouds.all} %, </span>
        <span>{data.list[0].main.pressure} hpa </span>
      </State>

      <Coords>
        Geo coords [{data.city.coord.lat} , {data.city.coord.lon}]
      </Coords>
    </DisplayDiv>
  );
};

export default CurrentDisplay;
