import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
  TextField,
} from "@mui/material";
import Nav from "./Nav";

const Home = () => {
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [term, setTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
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

  const calculatePayment = () => {
    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const numberOfPayments = parseFloat(term) * 12;

    if (!principal || !calculatedInterest || !numberOfPayments) {
      setMonthlyPayment(null);
      return;
    }

    const x = Math.pow(1 + calculatedInterest, numberOfPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    setMonthlyPayment(monthly.toFixed(2));
  };

  return (
    <ThemeProvider theme={theme}>
      <Nav/>
      {/* <Box sx={{ flexGrow: 3 }}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6">Loan Calculator</Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Button color="inherit" variant="pl-4">
                Home
              </Button>
              <Button color="inherit">Exhange Rates(Live)</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Error page</Button>
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
      </Box> */}
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Loan Calculator Dashboard
        </Typography>

        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mt: 2 }}>
          <TextField
            label="Loan Amount"
            variant="outlined"
            type="tel"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <TextField
            label="Interest Rate (%)"
            variant="outlined"
            type="tel"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
          <TextField
            label="Term (Years)"
            variant="outlined"
            type="tel"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={calculatePayment}
        >
          CALCULATE
        </Button>
        {monthlyPayment && (
          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mt: 2 }}>
            <Typography>Monthly EMI:{monthlyPayment}</Typography>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Home;
