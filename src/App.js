import React from "react";
import styled from "styled-components";

import Search from "./components/Search";
import "./App.css";
import UpcomingWeather from "./components/UpcomingWheater";
import { DataProvider } from "./context/context";
import { Routes, Route } from "react-router-dom";


const WrapperDiv = styled.div`
  max-width: 100%;
  text-align: center;
  width: 100%;
`;

export default function App() {

  return (
    <div className="App">
      <DataProvider>
        <WrapperDiv>
          <Routes>
            <Route path="/" element={<Search />} />

            <Route path="upk/:lat/:lon" element={<UpcomingWeather />} />
          </Routes>
        </WrapperDiv>
      </DataProvider>
    </div>
  );
}
