import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Typography } from "@mui/material";

const items = [
  {
    name: "First Slide",
    description: "This is the first slide",
    image: "https://via.placeholder.com/800x400?text=First+Slide",
  },
  {
    name: "Second Slide",
    description: "This is the second slide",
    image: "https://via.placeholder.com/800x400?text=Second+Slide",
  },
  {
    name: "Third Slide",
    description: "This is the third slide",
    image: "https://via.placeholder.com/800x400?text=Third+Slide",
  },
];

function CarouselComponent() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #000000 0%, #434343 100%)", // Background gradient
        overflow: "hidden",
      }}
    >
      <Carousel
        animation="fade"
        interval={3000}
        navButtonsAlwaysVisible
        indicators={true}
        sx={{
          width: "80%",
          maxWidth: "900px",
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "#121212", // Dark background for the carousel
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6)", // Enhanced shadow effect
        }}
      >
        {items.map((item, index) => (
          <CarouselItem key={index} item={item} />
        ))}
      </Carousel>
    </Box>
  );
}

function CarouselItem({ item }) {
  return (
    <Paper
      elevation={0}
      sx={{
        background: "linear-gradient(45deg, #1E1E1E, #111)", // Gradient background for slides
        color: "white",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="1.5rem"
      >
        <img
          src={item.image}
          alt={item.name}
          style={{
            maxWidth: "100%",
            maxHeight: "300px",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)", // Add shadow to images
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <Typography variant="h4" gutterBottom>
          {item.name}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {item.description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1565C0", // Primary button color
            "&:hover": {
              backgroundColor: "#1976D2", // Slightly lighter on hover
            },
            px: 3,
            py: 1.2,
          }}
        >
          Learn More
        </Button>
      </Box>
    </Paper>
  );
}

export default CarouselComponent;
