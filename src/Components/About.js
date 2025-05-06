import React from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  useTheme
} from '@mui/material';
import Nav from './Nav';

const About = () => {
  const theme = useTheme();

  return (
    <>
      <Nav/>
    <Paper elevation={1} sx={{ p: 4, maxWidth: 800, margin: 'auto', mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        About This App
      </Typography>

      <Typography variant="body1">
        This Loan Calculator App is a modern, single-page web application built using React JS and Material UI. 
        It allows users to calculate loan EMIs (Equated Monthly Installments), view a detailed amortization schedule, 
        and see real-time currency conversions of their EMI using live exchange rates.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
        Instructions for Candidates
      </Typography>
      <Typography variant="body1">
        Please follow these instructions to complete and submit your project:
      </Typography>

      <List dense>
        <ListItem>
          <ListItemText primary="Push the entire project to a public GitHub repository." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Make sure to commit regularly with clear messages after completing each feature." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Use the provided EMI formula to perform calculations." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Use Context API for global state management (e.g. theme, currency)." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Create custom React hooks for reusable logic (e.g. EMI calculation, fetching exchange rates)." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Integrate the ExchangeRate API for live currency conversion." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Ensure the app is fully responsive on all screen sizes." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Implement both light and dark modes using Material UI's theming system." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Add a 404 Not Found page for unmatched routes." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Handle runtime errors gracefully by showing an Error Page." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Once deployed, add the live deployment link in the About section of your GitHub repo." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Deploy the project on any platform (e.g. Vercel, Netlify, GitHub Pages)." />
        </ListItem>
      </List>

      <Divider sx={{ my: 3 }} />
    </Paper>
    </>
  
  );
};

export default About;
