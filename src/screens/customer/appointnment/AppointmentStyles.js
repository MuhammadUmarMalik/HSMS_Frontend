// src/screens/appointment/AppointmentStyles.js
import { styled } from '@mui/material/styles';
import { TextField, Container, Box, Button, FormControl } from '@mui/material';

export const Root = styled(Box)({
  display: 'flex',
  height: '100vh',
  backgroundColor: '#1a1a3a',
});

export const LeftSection = styled(Box)({
  flex: 1,
  backgroundImage: `url(${require('../../../assests/barber-shop.webp')})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const RightSection = styled(Container)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#1a1a3a',
  padding: '32px',
  color: '#fff',
});

export const FormBox = styled(Box)({
  width: '100%',
  maxWidth: '400px',
});

export const CustomTextField = styled(TextField)({
  marginBottom: '16px',
  '& .MuiInputBase-root': {
    color: '#fff', // Text color
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff', // Border color
    },
    '&:hover fieldset': {
      borderColor: '#fff', // Border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ffcc00', // Border color on focus
    },
  },
  '& .MuiInputLabel-root': {
    color: '#fff', // Label color
  },
  '& .MuiInputAdornment-root .MuiSvgIcon-root': {
    color: '#fff', // Icon color
  },
  '& .MuiInputAdornment-root .MuiTypography-root': {
    color: '#fff', // Placeholder color
  },
  '& .MuiSvgIcon-root': {
    color: '#fff', // Icon color
  },
});

export const CustomFormControl = styled(FormControl)({
  marginBottom: '16px',
  '& .MuiInputBase-root': {
    color: '#fff', // Text color
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff', // Border color
    },
    '&:hover fieldset': {
      borderColor: '#fff', // Border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ffcc00', // Border color on focus
    },
  },
  '& .MuiInputLabel-root': {
    color: '#fff', // Label color
  },
  '& .MuiSelect-icon': {
    color: '#fff', // Select dropdown icon color
  },
});

export const CustomButton = styled(Button)({
  padding: '12px 24px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
  color: '#ffcc00',
  border: '2px solid #ffcc00',
  '&:hover': {
    backgroundColor: '#ffcc00',
    color: '#000',
    border: '1px solid transparent',
  },
  marginTop: '16px',
  borderRadius: '4px',
  boxShadow: 'none',
  transition: 'all 0.3s ease',
});
