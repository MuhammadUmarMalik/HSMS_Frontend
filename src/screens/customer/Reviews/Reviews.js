// src/screens/customer/Reviews/Reviews.js

import React from "react";
import { Box, Typography, Container, Paper, Avatar } from "@mui/material";
import Header from "../../../components/headers/admin/Header"; // Adjust the path based on your project structure
import Carousel from "react-material-ui-carousel"; // Import the carousel component
import CustomerHeader from "../../../components/headers/customer-header/CustomerHeader";
import AdminHeader from "../../../components/headers/admin/Header";
import BarberHeader from "../../../components/headers/BarberHeader.js/BarberHeader";
import barber_man1 from "./../../../assests/barber_man1.png";
const reviews = [
  {
    id: 1,
    customerName: "John Doe",
    customerAvatar: "src/assets/barber_man1.png", // Example path to avatar image
    feedback:
      " game-changer! My facial hair has never looked this sharp. The attention to detail and the cool atmosphere made the experience unforgettable. ",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    customerAvatar: "/avatars/jane.jpg", // Example path to avatar image
    feedback: "Great experience. Friendly staff and quick resolution.",
  },
  {
    id: 3,
    customerName: "Michael Johnson",
    customerAvatar: "/avatars/michael.jpg", // Example path to avatar image
    feedback: "Superb support! Quick turnaround and very knowledgeable.",
  },
  {
    id: 4,
    customerName: "Emily Brown",
    customerAvatar: "/avatars/emily.jpg", // Example path to avatar image
    feedback: "Amazing service. They really went above and beyond.",
  },
  // Add more reviews as needed
];

const Reviews = () => {
  const items = reviews.map((review) => ({
    id: review.id,
    customerName: review.customerName,
    customerAvatar: review.customerAvatar,
    feedback: review.feedback,
  }));

  const renderCarouselItem = (item, index) => (
    <Paper
      key={item.id}
      elevation={3}
      style={{
        backgroundColor: "#2a2a4a",
        color: "#fff",
        padding: "10px",
        textAlign: "center",
        width: "40%", // Adjust card width
        margin: "0 auto", // Center align horizontally
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={barber_man1}
        style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 5 }}
      />
      {/* <Avatar
        src={item.customerAvatar}
        sx={{
          width: 100, // Adjust avatar size
          height: 100, // Adjust avatar size
          marginBottom: 5,
        }}
      /> */}
      <Typography variant="h6" gutterBottom>
        {item.customerName}
      </Typography>

      <Typography variant="body1">{item.feedback}</Typography>
    </Paper>
  );

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
    <Box bgcolor="#1a1a3a" minHeight="100vh" color="#fff">
      {renderHeader()}

      <Container>
        <Box py={2}>
          <Typography variant="h4" align="center" gutterBottom>
            WHAT OUR CLIENTS SAY
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Elevate your trim, amplify your style – reallygreatsite, where{" "}
            <br />
            barbership meets the extraordinary
          </Typography>
        </Box>
        <br />
        <Carousel
          autoPlay={true}
          animation="slide"
          timeout={5000}
          navButtonsAlwaysVisible={true}
          cycleNavigation={true}
          indicators={true}
          fullHeightHover={false}
        >
          {items.map((item, index) => renderCarouselItem(item, index))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Reviews;
