import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

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

export const Logo = styled("img")({
  width: "100px",
  height: "60px",
  marginRight: "16px",
  zIndex: 3,
});

export const Title = styled(Typography)({
  flexGrow: 1,
  textAlign: "center",
  color: "#ffcc00",
  zIndex: 3,
});

export const MenuLeft = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  flex: 1,
  zIndex: 3,
});

export const MenuRight = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  flex: 1,
  zIndex: 3,
});
export const OutletDesign = styled(Box)({
  position: "relative",
  width: "94vw",
  height: "100vh",
  //   marginLeft: "16.3%",
  //   transition: "0.2s ease-in-out",
  //   paddingTop: "8.4%",
});
