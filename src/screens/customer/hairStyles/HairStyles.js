// src/screens/hairstyles/HairStylesPage.js
import React from "react";
import {
  Typography,
  Grid,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import { Save as SaveIcon } from "@mui/icons-material";
import { observer } from "mobx-react";
import { hairStylesData } from "./hairStylesData.js";
import { Container, StyledCard } from "./HairStylesStyle.js";
import { hairStylesStore } from "../../../stores/hairStyles/HairStylesStore.js";
import CustomerHeader from "../../../components/headers/customer-header/CustomerHeader.js";
import AdminHeader from "../../../components/headers/admin/Header.js";
import BarberHeader from "../../../components/headers/BarberHeader.js/BarberHeader.js";

const HairStyles = observer(() => {
  const { savedStyles, toggleSaveStyle } = hairStylesStore;

  const handleSave = (id) => {
    toggleSaveStyle(id);
  };

  const userToken = localStorage.getItem("userToken");
  const userTokenObj = userToken ? JSON.parse(userToken) : null;
  const role = userTokenObj ? userTokenObj.role : null;

  const renderHeader = () => {
    switch (role) {
      case "admin":
        return <AdminHeader />;
      case "customer":
        return <CustomerHeader />;
      case "barber":
        return <BarberHeader />;
      default:
        return null;
    }
  };

  return (
    <Container
    // style={{ backgroundColor: "#1a1a3a", width: "100%", height: "100vh" }}
    >
      {renderHeader()}

      <Typography
        variant="h4"
        gutterBottom
        style={{
          marginTop: "6rem",
        }}
      >
        Our Hair Styles
      </Typography>
      <Grid container spacing={2}>
        {hairStylesData.map((style) => (
          <Grid item xs={12} sm={6} md={4} key={style.id}>
            <StyledCard>
              <CardMedia
                component="img"
                height="140"
                image={style.imageUrl}
                alt={style.name}
              />
              <CardContent>
                <Typography variant="h6">{style.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {style.description}
                </Typography>
                <IconButton
                  onClick={() => handleSave(style.id)}
                  color={savedStyles.includes(style.id) ? "primary" : "default"}
                >
                  <SaveIcon />
                </IconButton>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
});

export default HairStyles;
