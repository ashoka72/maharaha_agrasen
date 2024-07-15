import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Grid } from '@mui/material';

const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(`Donating ${amount} for "${description}" by ${firstName} ${lastName} (${email})`);
    // Reset form fields
    setAmount('');
    setDescription('');
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h5" align="center" gutterBottom>
        Donation Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                inputProps: {
                  min: 0,
                  step: 1,
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '15px' }}>
              Donate Now
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default DonationForm;
