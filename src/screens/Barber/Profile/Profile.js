import React from "react";
import {
  Container,
  CustomAiHeading,
  SubContainer,
  ItemLeft,
  ItemCenter,
  ItemRight,
  ProfileBox,
  ProfileIcon,
  LogoutButton,
  Logo,
  ModalBox,
} from "./ProfileStyle";
import {
  Typography,
  Switch,
  IconButton,
  Modal,
  DialogActions,
  Button,
} from "@mui/material";
import barberbarber_man3 from "../../../assests/barber_man1.png";
import { editBarberStore } from "../../../stores/Barbers/EditBarberStore";
import EditBarberForm from "./EditBarberForm";
import { observer } from "mobx-react-lite";
import AdminHeader from "../../../components/headers/admin/Header";
import CustomerHeader from "../../../components/headers/customer-header/CustomerHeader";
import BarberHeader from "../../../components/headers/BarberHeader.js/BarberHeader";

const Profile = () => {
  const handleOpen = () => editBarberStore.setOpenModal(true);

  const handleEdit = (barber) => {
    // editBarberStore.setCurrentBarber(barber);
    handleOpen();
  };

  const handleClose = () => {
    editBarberStore.setOpenModal(false);
    // editBarberStore.setCurrentBarber(null);
  };

  const handleUpdate = () => {
    console.log("handleUpdate funciton");
    // editBarberStore.setOpenModal(false);
    // editBarberStore.setCurrentBarber(null);
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
          <Typography variant="h4">Profile Setting</Typography>
        </CustomAiHeading>
        <SubContainer>
          <ItemLeft>
            <h3 style={{ textDecoration: "underline", color: "#ffcc00" }}>
              Basic Info
            </h3>
            <h4 style={{ display: "flex", flexDirection: "row" }}>
              <span>Name: </span>
              <span onClick={() => handleEdit()} style={{ cursor: "pointer" }}>
                {"  "}
                Barber.Name
              </span>
            </h4>
            <h4 style={{ display: "flex", flexDirection: "row" }}>
              <span>Email: </span>
              <span onClick={() => handleEdit()} style={{ cursor: "pointer" }}>
                {"  "}
                Barber.Email
              </span>
            </h4>
            <h4 style={{ display: "flex", flexDirection: "row" }}>
              <span>Password: </span>
              <span onClick={() => handleEdit()} style={{ cursor: "pointer" }}>
                {"  "}
                Barber.Password
              </span>
            </h4>

            <h3 style={{ textDecoration: "underline", color: "#ffcc00" }}>
              Change Working Hours
            </h3>
            <h4>Set Hours: {" Barber.StartHour to Barber.EndHour "}</h4>
          </ItemLeft>
          <ItemCenter>
            <ProfileBox>
              <ProfileIcon>
                <Logo src={barberbarber_man3} alt="Logo" />
              </ProfileIcon>
            </ProfileBox>
            <h1>
              <LogoutButton
                variant="contained"
                //   onClick={handleUploadClick}
              >
                Logout
              </LogoutButton>
            </h1>
          </ItemCenter>
          <ItemRight></ItemRight>
        </SubContainer>
        <Modal open={editBarberStore.openModal} onClose={handleClose}>
          <ModalBox>
            <EditBarberForm onClose={handleClose} />
          </ModalBox>
        </Modal>
      </Container>
    </>
  );
};

export default observer(Profile);
