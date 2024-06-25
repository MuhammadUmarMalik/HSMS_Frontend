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
    feedback: "Excellent service! Prompt response and very helpful.",
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
        padding: "20px",
        textAlign: "center",
        width: "80%", // Adjust card width
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
          marginBottom: 10,
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
        <Box py={4}>
          <Typography variant="h2" align="center" gutterBottom>
            Customer Reviews
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            See what our customers are saying about us.
          </Typography>
        </Box>
        <Carousel
          autoPlay={true} // Enable autoplay
          animation="slide" // Slide animation
          timeout={5000} // Slide every 5 seconds
          navButtonsAlwaysVisible={true} // Show navigation buttons always
          cycleNavigation={true} // Enable cycle navigation
          indicators={true} // Show slide indicators
          fullHeightHover={false} // Disable full height hover effect
        >
          {items.map((item, index) => renderCarouselItem(item, index))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Reviews;
