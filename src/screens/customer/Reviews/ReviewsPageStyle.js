import { styled } from "@mui/material/styles";
import { Box, Button, Pagination } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: "#1a1a3a",
  color: "white",
  minHeight: "100vh",
  position: "relative",
}));

export const CustomAiHeading = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(4),
  padding: theme.spacing(4),
}));

export const Root = styled(Box)({
  backgroundColor: "#1a1a3a",
  minHeight: "100vh",
  color: "#fff",
  padding: "20px",
});

export const Heading = styled("div")({
  marginBottom: "20px",
});

export const ReviewCard = styled(Card)({
  backgroundColor: "#2a2a4a",
  color: "#fff",
  marginBottom: "20px",
});

export const CustomerAvatar = styled(Avatar)({
  backgroundColor: "#ffcc00",
});

