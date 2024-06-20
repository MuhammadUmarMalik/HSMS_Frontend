import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import { Logo, Title, MenuLeft, MenuRight } from './HeaderStyles';
import { NavLink } from '../../../screens/customer/home/HomeStyles'; 
import logo from '../../../assests/logo.png';

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ zIndex: 3 }}>
      <Toolbar>
        <MenuLeft>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/appointment">Appointments</NavLink>
        </MenuLeft>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Logo src={logo} alt="Logo" />
          <Title variant="h4">SHAPE YOUR STYLE</Title>
        </Box>
        <MenuRight>
          <NavLink to="/barbers-profile">Barbers</NavLink>
          <NavLink to="/hair-style">Hair Styles</NavLink>
          <NavLink to="/reviews">Reviews</NavLink>
        </MenuRight>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
