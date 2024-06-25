import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0),
  backgroundColor: "#1a1a3a",
  color: "white",
  minHeight: "100vh",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const CustomAiHeading = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1),
  paddingTop: theme.spacing(0.8),
}));

export const CalendTaskContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start", 
  alignItems: "flex-start",
  width: "100%",
  padding: theme.spacing(2), 
}));

export const ItemLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  paddingLeft: theme.spacing(2), 
  flex: 1,
}));

export const ItemRight = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  paddingRight: theme.spacing(2), 
  flex: 1,
}));
