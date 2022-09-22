import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

function Layout(props) {
  const { children } = props;

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Box>
        <Header />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <content>{children}</content>
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default Layout;
