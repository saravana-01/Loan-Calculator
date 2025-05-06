import { React, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Switch, FormControlLabel,createTheme,CssBaseline,ThemeProvider } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Nav = () => {
   const savedTheme = localStorage.getItem("darkMode") === "true";
    const [darkMode, setDarkMode] = useState(savedTheme);
  
    const theme = createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
      },
    });
    useEffect(() => {
      localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    const navigate =  useNavigate();
  return (
    <>
     <ThemeProvider theme={theme}>
         <Box sx={{ flexGrow: 3 }}>
           <CssBaseline />
           <AppBar position="static">
             <Toolbar sx={{ justifyContent: "space-between" }}>
               <Typography variant="h6">Loan Calculator</Typography>
               <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                 <Button color="inherit" variant="pl-4" onClick={()=>navigate('/')}>
                   Home
                 </Button>
                 <Button color="inherit" onClick={()=>navigate('/exchange')}>Exhange Rates(Live)</Button>
                 <Button color="inherit" onClick={() => navigate("/about")}>About</Button>
                 <Button color="inherit" onClick={() => navigate("*")}>Error page</Button>
                 <FormControlLabel
                   control={
                     <Switch
                       checked={darkMode}
                       onChange={() => setDarkMode(!darkMode)}
                       color="primary"
                     />
                   }
                 />
               </Box>
             </Toolbar>
           </AppBar>
         </Box>
       </ThemeProvider>
    </>
  )
}

export default Nav;
