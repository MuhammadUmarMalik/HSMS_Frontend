import { observer } from "mobx-react-lite";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AppointmentsImage from "../../../assests/Appointments.PNG";
import {
  Container,
  CustomAiHeading,
  CalendTaskContainer,
  ItemLeft,
  ItemRight,
  CalendarContainer,
  TaskList,
  TaskItem,
  TaskIcon,
  TaskInfo,
  ShowAllLink,
  TaskStatus,
  Logo,
} from "./AppointmentStyle";
import { Typography, IconButton } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import AdminHeader from "../../../components/headers/admin/Header";
import CustomerHeader from "../../../components/headers/customer-header/CustomerHeader";
import BarberHeader from "../../../components/headers/BarberHeader.js/BarberHeader";

const Appointments = observer(() => {
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
          <Typography variant="h4">Appointments</Typography>
        </CustomAiHeading>
        <CalendTaskContainer>
          <ItemLeft>
            <CalendarContainer>
              {/* <Typography
                variant="h4"
                style={{
                  color: "#ffcc00",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
                Calendar
              </Typography> */}
              <Logo src={AppointmentsImage} alt="Logo" />
            </CalendarContainer>
          </ItemLeft>
          <ItemRight>
            <Typography
              variant="h5"
              style={{
                color: "#fff",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              Upcoming Tasks
            </Typography>
            <TaskList>
              <TaskItem>
                <TaskIcon />
                <TaskInfo>
                  <Typography variant="h6">Fringe</Typography>
                  <Typography variant="body2">5 minutes left</Typography>
                </TaskInfo>
                <TaskStatus color="green" />
              </TaskItem>
              <TaskItem>
                <TaskIcon />
                <TaskInfo>
                  <Typography variant="h6">Pony</Typography>
                  <Typography variant="body2">12 hours left</Typography>
                </TaskInfo>
                <TaskStatus color="yellow" />
              </TaskItem>
            </TaskList>
            <ShowAllLink>
              <Typography variant="body2" style={{ color: "#ffcc00" }}>
                Show All
              </Typography>
              <MoreHoriz style={{ color: "#ffcc00" }} />
            </ShowAllLink>
          </ItemRight>
        </CalendTaskContainer>
      </Container>
    </>
  );
});

export default Appointments;
