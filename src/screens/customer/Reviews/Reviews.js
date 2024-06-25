// src/screens/customer/Reviews/Reviews.js

import React from "react";
import { Box, Typography, Container, Paper, Avatar } from "@mui/material";
import Header from "../../../components/headers/admin/Header"; // Adjust the path based on your project structure
import Carousel from "react-material-ui-carousel"; // Import the carousel component

const reviews = [
  {
    id: 1,
    customerName: "John Doe",
    customerAvatar: "/avatars/john.jpg", // Example path to avatar image
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
      <Avatar
        alt={item.customerName}
        src={item.customerAvatar}
        sx={{
          width: 100, // Adjust avatar size
          height: 100, // Adjust avatar size
          marginBottom: 5,
        }}
      />
      <Typography variant="h6" gutterBottom>
        {item.customerName}
      </Typography>
      <Typography variant="body1">{item.feedback}</Typography>
    </Paper>
  );

  return (
    <Box bgcolor="#1a1a3a" minHeight="100vh" color="#fff" padding="20px">
      <Header />
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
