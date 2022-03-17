import React from "react";
import styled from "styled-components";
const moment = require("moment");

const DayDiv = styled.div`
  margin: auto 0;
  padding: 2% 3%;

  margin: 1%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Wrapper = styled.div`
 
  width: 100%;

`;

const DayTitle = styled.h2`
  color: #111;
  margin: 0 0 2% 0;
  font-size: 1.5rem;
`;

const DayDetails = ({ day }) => {
  let newDate = new Date();
  const weekday = day.dt * 1000;
  newDate.setTime(weekday);

  moment(newDate).format("");

  return (
    <Wrapper>
      <DayDiv>
        <DayTitle>{moment(newDate).format("dddd")}</DayTitle>
      
      </DayDiv>
    </Wrapper>
  );
};

export default DayDetails;
