// src/screens/appointment/Appointment.js
import React from 'react';
import { Typography, Select, MenuItem, InputLabel, InputAdornment } from '@mui/material';
import { Root, LeftSection, RightSection, FormBox, CustomTextField, CustomButton, CustomFormControl } from './AppointmentStyles';
import appointmentStore from '../../../stores/appointment/AppointmentStore';
import { observer } from 'mobx-react';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Appointment = observer(() => {
  const handleFieldChange = (field) => (event) => {
    appointmentStore.setFormField(field, event.target.value);
  };

  return (
    <Root>
      <LeftSection />
      <RightSection>
        <FormBox>
          <Typography variant="h4" gutterBottom style={{ color: '#fff' }}>
            Make An Appointment
          </Typography>
          <Typography variant="body1" gutterBottom style={{ color: '#fff' }}>
            Fill out this form and get your seat
          </Typography>
          <CustomTextField
            label="Select Date"
            type="date"
            value={appointmentStore.formFields.date}
            onChange={handleFieldChange('date')}
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
            onChange={handleFieldChange('time')}
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
            <InputLabel style={{ color: '#fff' }}>Select Barber</InputLabel>
            <Select
              value={appointmentStore.formFields.branch}
              onChange={handleFieldChange('barber')}
              label="Babers"
            >
              <MenuItem value="branch1">Rischard</MenuItem>
              <MenuItem value="branch2">John</MenuItem>
              <MenuItem value="branch3">Doe</MenuItem>
            </Select>
          </CustomFormControl>
          <CustomButton variant="contained" fullWidth>
            BOOK NOW
          </CustomButton>
        </FormBox>
      </RightSection>
    </Root>
  );
});

export default Appointment;
