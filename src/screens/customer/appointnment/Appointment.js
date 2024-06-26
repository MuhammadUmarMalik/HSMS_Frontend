// src/screens/appointment/Appointment.js
import React, { useEffect } from "react";
import {
  Typography,
  Select,
  MenuItem,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import {
  Root,
  LeftSection,
  RightSection,
  FormBox,
  CustomTextField,
  CustomButton,
  CustomFormControl,
} from "./AppointmentStyles";
import appointmentStore from "../../../stores/appointment/AppointmentStore";
import { observer } from "mobx-react";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AdminHeader from "../../../components/headers/admin/Header";
import CustomerHeader from "../../../components/headers/customer-header/CustomerHeader";
import BarberHeader from "../../../components/headers/BarberHeader.js/BarberHeader";
import barberStore from "../../../stores/admin/barbers/barberStore";
import { useNavigate } from "react-router-dom";

const Appointment = observer(() => {
  const handleFieldChange = (field) => (event) => {
    appointmentStore.setFormField(field, event.target.value);
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

  useEffect(() => {
    const fetchBarbersData = async () => {
      try {
        await appointmentStore.fetchBarbers();
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchBarbersData();
  }, []);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !appointmentStore.formFields?.date &&
      !appointmentStore.formFields?.time &&
      !appointmentStore.formFields?.branch
    ) {
      appointmentStore.showError("Please fill all the fields");
      return;
    } else {
      appointmentStore.handleSubmit(navigate);
    }
  };
  return (
    <>
      {renderHeader()}
      <Root>
        <LeftSection />
        <RightSection>
          <FormBox>
            <Typography variant="h4" gutterBottom style={{ color: "#fff" }}>
              Make An Appointment
            </Typography>
            <Typography variant="body1" gutterBottom style={{ color: "#fff" }}>
              Fill out this form and get your seat
            </Typography>
            <CustomTextField
              label="Select Date"
              type="date"
              value={appointmentStore.formFields.date}
              onChange={handleFieldChange("date")}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EventIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <CustomTextField
              label="Select Time"
              type="time"
              value={appointmentStore.formFields.time}
              onChange={handleFieldChange("time")}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccessTimeIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <CustomFormControl fullWidth>
              <InputLabel>Select Barber</InputLabel>
              <Select
                value={appointmentStore.formFields.barber_id || ""}
                onChange={(event) => {
                  const selectedBarberId = event.target.value;
                  const selectedBarber = appointmentStore.barbers.find(
                    (barber) => barber.id === selectedBarberId
                  );

                  // Assuming handleFieldChange sets barber_id in formFields
                  handleFieldChange("barber_id")(event);

                  // You can set the name separately if needed
                  // handleFieldChange("barber")(selectedBarber?.name);

                  // Or, if formFields already has barber_id and barber, you can update them directly
                  // this.formFields.barber_id = selectedBarberId;
                  // this.formFields.barber = selectedBarber?.name;
                }}
                label="Barbers"
              >
                {appointmentStore.barbers.length
                  ? appointmentStore.barbers.map((barber) => (
                      <MenuItem key={barber.id} value={barber.id}>
                        {barber.name}
                      </MenuItem>
                    ))
                  : "No barbers available"}
              </Select>
            </CustomFormControl>
            <CustomButton
              onClick={(e) => {
                handleSubmit(e);
              }}
              variant="contained"
              fullWidth
            >
              BOOK NOW
            </CustomButton>
          </FormBox>
        </RightSection>
      </Root>
    </>
  );
});

export default Appointment;
