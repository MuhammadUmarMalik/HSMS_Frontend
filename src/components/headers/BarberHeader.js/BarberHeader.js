import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import {
  Container,
  Logo,
  Title,
  MenuLeft,
  MenuRight,
  OutletDesign,
} from "./BarberHeaderStyle";
import { NavLink } from "../../../screens/admin/home/HomeStyles";
import logo from "../../../assests/logo.png";
import { Outlet } from "react-router-dom";

const BarberHeader = () => {
  return (
    <>
      <Container>
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          sx={{ zIndex: 3 }}
        >
          <Toolbar>
            <MenuLeft>
              {/* when barber logins then navigate him to /barbers/home not only to /barbers (for showing default home page)  */}
              <NavLink to="/barbers/home">Home</NavLink>
              <NavLink to="/barbers/dashboard">Dashboard</NavLink>
            </MenuLeft>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Logo src={logo} alt="Logo" />
              <Title variant="h4">SHAPE YOUR STYLE</Title>
            </Box>
            <MenuRight>
              <NavLink to="/barbers/profile">Profile</NavLink>
              <NavLink to="/barbers/appointments">Appointments</NavLink>
            </MenuRight>
          </Toolbar>
        </AppBar>
        <OutletDesign>
          <Outlet />
        </OutletDesign>
      </Container>
    </>
  );
};

export default BarberHeader;
