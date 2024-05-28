import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import AppBarComponent from './AppBarComponent';
import FooterComponent from './FooterComponent';


const Layout = ({ children }) => {  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />      
      <AppBarComponent />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>       
        {children}
      </Box>
      <FooterComponent />
    </Box>
  );
};

export default Layout;
