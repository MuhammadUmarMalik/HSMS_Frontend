import React from "react";
import { observer } from "mobx-react";
import {
  FormContainer,
  StyledTextField,
  StyledButton,
  StyledCancelButton,
  ButtonContainer,
} from "./AddBarberFormStyles";
import barberStore from "../../stores/admin/barbers/barberStore";

const AddBarberForm = ({ onClose }) => {
  const handleChange = (e) => {
    barberStore.setFormField(e.target.name, e.target.value);
  };

  const handleAddClick = () => {
    if (barberStore.currentBarber) {
      barberStore.updateBarber(
        barberStore.currentBarber.id,
        barberStore.formFields
      );
    } else {
      barberStore.addBarber(barberStore.formFields);
    }
    onClose();
    barberStore.resetFormFields();
  };

  return (
    <FormContainer component="form">
      <StyledTextField
        required
        fullWidth
        label="Name"
        name="name"
        value={barberStore.formFields.name}
        onChange={handleChange}
      />
      <StyledTextField
        required
        fullWidth
        label="Email"
        name="email"
        value={barberStore.formFields.email}
        onChange={handleChange}
      />

      <StyledTextField
        required
        fullWidth
        label="Password"
        name="password"
        value={barberStore.formFields.password}
        onChange={handleChange}
      />
      <StyledTextField
        required
        fullWidth
        label="Specialization"
        name="specialization"
        value={barberStore.formFields.specialization}
        onChange={handleChange}
      />
      <StyledTextField
        required
        fullWidth
        label="Role"
        name="role"
        value={barberStore.formFields.role}
        onChange={handleChange}
      />
      <ButtonContainer>
        <StyledButton
          variant="contained"
          color="primary"
          onClick={handleAddClick}
        >
          {barberStore.currentBarber ? "Update" : "Add"}
        </StyledButton>
        <StyledCancelButton variant="outlined" onClick={onClose}>
          Cancel
        </StyledCancelButton>
      </ButtonContainer>
    </FormContainer>
  );
};

export default observer(AddBarberForm);
