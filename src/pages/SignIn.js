import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import Layout from '../components/Layout';
import { sampleUserData } from '../components/MockData';
import CustomThemeProvider from '../CustomThemeProvider';

function SignIn({
  email, setEmail, password, setPassword, isSignedIn, setIsSignedIn,
}) {
  if (!isSignedIn) {
    return (
      <Layout>
        <Box maxWidth="400px" display="flex" flexDirection="column" margin="auto">
          <Box id="logo" margin="auto">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1365/1365481.png"
              height="75px"
              width="75px"
              alt="logo"
            />
          </Box>
          <Box margin="auto">
            <h3>Welcome, Please Sign In!</h3>

          </Box>

          <Box>Email:</Box>

          <input
            className="input"
            id="username"
            value={email}
            placeholder="please type username"
            type="text"
            onChange={(event) => {
              // const newEmail = event.target.value;
              setEmail(sampleUserData.email);
              console.log('email: ', email);
            }}
          />

          <Box marginTop="20px">Password:</Box>

          <input
            className="input"
            id="password"
            value={password}
            placeholder="password"
            type="text"
            onChange={(event) => {
              const newPassword = event.target.value;
              setPassword(newPassword);
            }}
          />
          <br />
          <button
            id="sign-in"
            type="submit"
            onClick={() => {
              setIsSignedIn(true);

              console.log('email: ', email);
            }}
          >
            Sign In
          </button>
        </Box>

      </Layout>
    );
  }
  if (isSignedIn === true) {
    return (
      <CustomThemeProvider>
        <Layout>
          <Box textAlign="center">
            <Button variant="contained" color="secondary">Logout</Button>

          </Box>

        </Layout>

      </CustomThemeProvider>
    );
  }
}

export default SignIn;
