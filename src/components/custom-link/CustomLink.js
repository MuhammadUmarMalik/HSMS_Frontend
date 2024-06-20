import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const CustomLink = styled(Link)({
  color: '#ffcc00', // Custom color
  textDecoration: 'none', // Remove underline
  fontWeight: 'bold', // Make text bold
  '&:hover': {
    textDecoration: 'underline', // Underline on hover
  },
});

export default CustomLink;
