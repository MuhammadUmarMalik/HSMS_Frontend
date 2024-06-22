import { styled } from '@mui/system';
import { Card } from '@mui/material';

export const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: 'auto',
  '& .MuiCardContent-root': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  '& .MuiIconButton-root': {
    alignSelf: 'flex-end',
  },
});
