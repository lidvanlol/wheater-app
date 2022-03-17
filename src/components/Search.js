import React from "react";
import styled from "styled-components";
import { Button, Input } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";
import { useData } from "../context/context";
import WeatherTable from "./WeatherTable";
import apiKey from "../api";
const SearchWrapper = styled.div`
  padding: 2%;
  font-family: "Roboto", sans-serif;
  color: navy;
  justify-content: center;
  align-items: center;
  height: 20%;
  background-color: #e57f50;
`;

const StyledButton = styled(Button)`
  -webkit-border-top-right-radius: 100px;
  -webkit-border-bottom-right-radius: 100px;
  -moz-border-radius-topright: 100px;
  -moz-border-radius-bottomright: 100px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  background: #e96e50;
  border: 1px solid gray;
`;

const StyledInput = styled(Input)`
  width: 200px;
  -webkit-border-top-left-radius: 100px;
  -webkit-border-bottom-left-radius: 100px;
  -moz-border-radius-topleft: 100px;
  -moz-border-radius-bottomleft: 100px;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  @media (max-width:600px) {
    width: 150px;
  }
`;

const SearchInstructions = styled.h3`
  margin: auto;
  padding: 5%;
`;

export default function Search() {
  const { city, setCity, data, setData, notFound, setNotFound } = useData();

  const ApiKey = apiKey;

  const onSearch = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${ApiKey}
&units=metric`
    )
      .then((response) => response.json())

      .then((request) => {
        if (request.cod !== "404") {
          setNotFound(false);
          setData(request);
        } else {
          setNotFound(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  const change = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <SearchWrapper>
        <StyledInput
          placeholder="Enter City"
          onChange={change}
          value={city}
          onKeyDown={onKeyDown}

        />
        <StyledButton
          type="primary"
          icon={<QuestionCircleFilled />}
          size="normal"
          onClick={onSearch}
        >
          Search
        </StyledButton>
      </SearchWrapper>

      {notFound ? (
        <SearchInstructions>Please search a valid city</SearchInstructions>
      ) : (
        <WeatherTable data={data} />
      )}
    </>
  );
}
