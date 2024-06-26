import { styled } from "@mui/system";
import { Box, Card } from "@mui/material";

export const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: "auto",
  "& .MuiCardContent-root": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  "& .MuiIconButton-root": {
    alignSelf: "flex-end",
  },
});

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
