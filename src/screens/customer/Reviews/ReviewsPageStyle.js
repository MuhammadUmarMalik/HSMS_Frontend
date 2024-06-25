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
