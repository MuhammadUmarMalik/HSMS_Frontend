import { styled } from '@mui/material/styles';
import { Typography, Box } from '@mui/material';

export const Logo = styled('img')({
  width: '100px',
  height: '60px',
  marginRight: '16px',
  zIndex: 3, 
});

export const Title = styled(Typography)({
  flexGrow: 1,
  textAlign: 'center',
  color: '#ffcc00', 
  zIndex: 3,
});

export const MenuLeft = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  flex: 1,
  zIndex: 3, 
});

export const MenuRight = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  flex: 1,
  zIndex: 3, 
});
