import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Alert,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import Nav from './Nav';

const Exchange = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [rates, setRates] = useState({});
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchRates = async () => {
    //   setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/cc459798557a8374fb8fe065/latest/${baseCurrency}`
        );

        if (response.data.result === 'success') {
          setRates(response.data.conversion_rates);
        } else {
          setError('Failed to fetch exchange rate data.');
        }
      } catch (err) {
        setError('Network error occurred.');
      } 
    };

    fetchRates();
  }, [baseCurrency]);

  return (
    <>
    <Nav/>
     <Box sx={{ maxWidth: 600, mx: 'auto', p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Exchange Money
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="currency-label">Base Currency</InputLabel>
        <Select
          labelId="currency-label"
          value={baseCurrency}
          label="Base Currency"
          onChange={(e) => setBaseCurrency(e.target.value)}
        >
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="INR">INR</MenuItem>
          <MenuItem value="GBP">GBP</MenuItem>
          <MenuItem value="JPY">JPY</MenuItem>
          <MenuItem value="AUD">AUD</MenuItem>
          <MenuItem value="CAD">CAD</MenuItem>
          {/* Add more currency codes if needed */}
        </Select>
      </FormControl>

      {/* {loading && <CircularProgress />} */}
      {error && <Alert severity="error">{error}</Alert>}

      { !error && (
        <>
          <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
            Exchange Rates for {baseCurrency}
          </Typography>
          <List dense>
            {Object.entries(rates).map(([currency, value]) => (
              <ListItem key={currency}>
                <ListItemText primary={`${currency}: ${value}`} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
    </>
   
  );
};
export default Exchange;
