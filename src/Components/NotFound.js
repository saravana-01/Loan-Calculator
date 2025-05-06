import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <>
       <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
    >
      <Typography variant="h4" gutterBottom>
        Something went wrong in the application.
      </Typography>
      <Button
        variant="outlined"
      
        onClick={() => navigate('/')}
      >
        GO HOME
      </Button>
    </Box>
    </>
  )
}

export default NotFound
