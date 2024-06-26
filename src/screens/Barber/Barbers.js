import { observer } from "mobx-react-lite";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { barbersStore } from "../../stores/Barbers/BarbersStore/BarbersStore";
import {
  Container,
  CustomAiHeading,
  CalendTaskContainer,
  ItemLeft,
  ItemRight,
  CalendarContainer,
  TaskItem,
  TaskSwitch,
  TaskIcon,
  TaskInfo,
  HeaderContainer,
} from "./BarberStyle";
import { Typography, Switch, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { BarChart, DonutLarge, Equalizer } from "@mui/icons-material";
import TuneIcon from "@mui/icons-material/Tune";
import AdminHeader from "../../components/headers/admin/Header";
import CustomerHeader from "../../components/headers/customer-header/CustomerHeader";
import BarberHeader from "../../components/headers/BarberHeader.js/BarberHeader";

const Barbers = observer(() => {
  const onDateChange = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Resetting the time to midnight

    if (date >= today) {
      barbersStore.setSelectedDate(date);
    } else {
      alert("Selected date cannot be in the past");
    }
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
    <>
      <Container>
        {renderHeader()}

        <CustomAiHeading>
          <Typography variant="h4">Welcome {"Barber.Name"}</Typography>
        </CustomAiHeading>
        <CalendTaskContainer>
          <ItemLeft>
            <CalendarContainer>
              <Typography
                variant="h4"
                style={{
                  color: "#ffcc00",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
                Calendar
              </Typography>
              <Calendar
                onChange={onDateChange}
                value={barbersStore.selectedDate}
                tileDisabled={({ date }) =>
                  date < new Date().setHours(0, 0, 0, 0)
                }
              />
            </CalendarContainer>
          </ItemLeft>
          <ItemRight>
            <HeaderContainer>
              <Typography
                variant="h5"
                style={{
                  color: "#fff",
                  marginRight: "auto",
                }}
              >
                Advanced Statistic
              </Typography>
              <TuneIcon style={{ color: "#fff" }} />
              {/* <Equalizer style={{ color: "#fff" }} /> */}
            </HeaderContainer>
            <TaskItem>
              <TaskIcon>📄</TaskIcon>
              <TaskInfo>
                <Typography variant="h6">Task A</Typography>
                <Typography variant="body2">+ $200.00</Typography>
              </TaskInfo>
              <TaskSwitch>
                <Typography variant="body2" style={{ marginRight: "0.5rem" }}>
                  On Progress
                </Typography>
                <Switch defaultChecked color="primary" />
              </TaskSwitch>
            </TaskItem>
            <TaskItem>
              <TaskIcon>📄</TaskIcon>
              <TaskInfo>
                <Typography variant="h6">Task B</Typography>
                <Typography variant="body2">+ $200.00</Typography>
              </TaskInfo>
              <TaskSwitch>
                <Typography variant="body2" style={{ marginRight: "0.5rem" }}>
                  On Progress
                </Typography>
                <Switch defaultChecked color="primary" />
              </TaskSwitch>
            </TaskItem>
          </ItemRight>
        </CalendTaskContainer>
      </Container>
    </>
  );
});

export default Barbers;
