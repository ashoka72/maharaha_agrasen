import { Box, Typography, Link } from '@mui/material';
import Image from 'next/image'; // Import Image from next/image

const Footer = () => {
  return (
    <Box
      component="footer"
      bgcolor="#007bff"
      color="white"
      py={1}
      textAlign="center"
      position="fixed"
      bottom={0}
      width="100%"
      borderTop="1px solid #ccc"
      zIndex={999} // Adjust the z-index as needed
      display="flex"
      alignItems='center'
      // padding="0 30px"
    >
      <Typography sx={{ width: 30, height: 30,margin:"0 40px" }}>
    <Image src="https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617_640.jpg" alt="Media Tech Temple Logo" width={200} height={200} objectFit="contain" />
   </Typography >
      
      <Typography variant="body2" sx={{margin:"0 40px"}}>
        All rights reserved to Agarbandhu Seva Sansthan 
      </Typography>
      <Typography variant="body2" mt={0}>
        Designed and developed by{' '}
        <Link
          href="https://www.mediatechtemple.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '18px', color: '#fff' ,textDecoration: 'underline'}}
        >
          Media Tech Temple
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
