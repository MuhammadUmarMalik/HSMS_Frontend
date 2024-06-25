import React from "react";
import BarberHeader from "../../components/headers/BarberHeader.js/BarberHeader";
import { NavLink } from "../../screens/admin/home/HomeStyles";
import {
  Container,
  CustomAiHeading,
  CalendTaskContainer,
  ItemLeft,
  ItemRight,
} from "./BarberStyle";
import { Typography } from "@mui/material";

const Barbers = () => {
  return (
    <>
      <Container>
        <CustomAiHeading>
          <Typography variant="h4">Welcome {"Barber.Name"}</Typography>
        </CustomAiHeading>
        <CalendTaskContainer>
          <ItemLeft>
            <h1>usman</h1>
            <h1>usman</h1>
          </ItemLeft>
          <ItemRight>
            <h1>usman</h1>
            <h1>usman</h1>
          </ItemRight>
        </CalendTaskContainer>
      </Container>
    </>
  );
};

export default Barbers;
